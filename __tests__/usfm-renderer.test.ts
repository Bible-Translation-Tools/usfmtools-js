import { USFMParser } from "../src/usfm-parser";
import { USFMRenderer } from "../src/usfm-renderer";
import { CMarker } from "../src/models/markers/c-marker";
import { VMarker } from "../src/models/markers/v-marker";
import { WMarker } from "../src/models/markers/w-marker";

function parse(usfm: string) {
  return new USFMParser(null, true, true).parseFromString(usfm);
}

function renderVerse(usfm: string, config = {}): string {
  const doc = parse(usfm);
  const verse = doc.getChildMarkers(VMarker)[0];
  return new USFMRenderer(config).render(verse).trim();
}

describe("USFMRenderer", () => {
  describe("default rendering", () => {
    test("renders a plain verse back to USFM", () => {
      const result = renderVerse("\\c 1\n\\v 1 In the beginning God created\n");
      expect(result).toBe("\\v 1 In the beginning God created");
    });

    test("keeps word entries and attributes by default", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 the \\w earth|strong="H776"\\w* was\n'
      );
      expect(result).toBe('\\v 1 the \\w earth|strong="H776"\\w* was');
    });

    test("renders a whole document", () => {
      const doc = parse("\\id GEN\n\\c 1\n\\p\n\\v 1 In the beginning\n");
      const result = new USFMRenderer().render(doc);
      expect(result).toContain("\\id GEN");
      expect(result).toContain("\\c 1");
      expect(result).toContain("\\p");
      expect(result).toContain("\\v 1 In the beginning");
    });
  });

  describe("unwrapWordEntries", () => {
    const config = { unwrapWordEntries: true };

    test("replaces a word entry with its term", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 the \\w earth|strong="H776"\\w* was\n',
        config
      );
      expect(result).toBe("\\v 1 the earth was");
    });

    test("drops multiple attributes", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 God \\w created|strong="H1254" x-morph="strongMorph:TH8804"\\w* them\n',
        config
      );
      expect(result).toBe("\\v 1 God created them");
    });

    test("keeps punctuation attached to the term", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 the \\w earth|strong="H776"\\w*, and l\'\\w abyss|strong="H8415"\\w*.\n',
        config
      );
      expect(result).toBe("\\v 1 the earth, and l'abyss.");
    });

    test("restores the space between adjacent word entries", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 \\w God|strong="H430"\\w* \\w created|strong="H1254"\\w* it\n',
        config
      );
      expect(result).toBe("\\v 1 God created it");
    });

    test("drops attribute-only word entries", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 they \\w came|strong="H935" x-morph="strongMorph:TH8802"\\w*\\w |strong="H935" x-morph="strongMorph:TH8804"\\w* to Egypt\n',
        config
      );
      expect(result).toBe("\\v 1 they came to Egypt");
    });

    test("drops empty word entries", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 they \\w served|strong="H5647"\\w*\\w \\w* the king\n',
        config
      );
      expect(result).toBe("\\v 1 they served the king");
    });

    test("keeps structural markers intact", () => {
      const result = renderVerse(
        '\\c 1\n\\v 1 A \\w song|strong="H7892"\\w*\n\\q2 of ascents.\n',
        config
      );
      expect(result).toBe("\\v 1 A song \\q of ascents.");
    });
  });

  describe("excludeMarkers", () => {
    test("drops excluded markers and their text", () => {
      const doc = parse("\\c 1\n\\s5\n\\p\n\\v 1 In the beginning\n");
      const chapter = doc.getChildMarkers(CMarker)[0];
      const result = new USFMRenderer({ excludeMarkers: ["s"] }).render(
        chapter
      );
      expect(result).not.toContain("\\s");
      expect(result).toContain("\\v 1 In the beginning");
    });

    test("drops section headings with text", () => {
      const doc = parse("\\c 1\n\\s A heading\n\\p\n\\v 1 In the beginning\n");
      const chapter = doc.getChildMarkers(CMarker)[0];
      const result = new USFMRenderer({ excludeMarkers: ["s"] }).render(
        chapter
      );
      expect(result).not.toContain("heading");
    });
  });

  describe("WMarker validation", () => {
    test("attribute-only word entries parse as WMarker", () => {
      const doc = parse('\\c 1\n\\v 1 \\w |strong="H935"\\w* text\n');
      const words = doc.getChildMarkers(WMarker);
      expect(words.length).toBe(1);
      expect(words[0].attributes["strong"]).toBe("H935");
      expect(new USFMRenderer().render(doc)).toContain('|strong="H935"');
    });
  });
});
