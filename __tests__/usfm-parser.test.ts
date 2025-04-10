import { USFMParser } from "../src/usfm-parser";
import { USFMDocument } from "../src/models/markers/usfm-document";
import { Marker } from "../src/models/markers/marker";
import { VMarker } from "../src/models/markers/v-marker";
import { TextBlock } from "../src/models/markers/text-block";
import { IDMarker } from "../src/models/markers/id-marker";
import { IDEMarker } from "../src/models/markers/ide-marker";
import { STSMarker } from "../src/models/markers/sts-marker";
import { USFMMarker } from "../src/models/markers/usfm-marker";
import { REMMarker } from "../src/models/markers/rem-marker";
import { IMTMarker } from "../src/models/markers/imt-marker";
import { ISMarker } from "../src/models/markers/is-marker";
import { IQMarker } from "../src/models/markers/iq-marker";
import { IBMarker } from "../src/models/markers/ib-marker";
import { IOTMarker } from "../src/models/markers/iot-marker";
import { IOMarker } from "../src/models/markers/io-marker";
import { IPMarker } from "../src/models/markers/ip-marker";
import { IPIMarker } from "../src/models/markers/ipi-marker";
import { IMMarker } from "../src/models/markers/im-marker";
import { IMIMarker } from "../src/models/markers/imi-marker";
import { IPQMarker } from "../src/models/markers/ipq-marker";
import { IMQMarker } from "../src/models/markers/imq-marker";
import { IPRMarker } from "../src/models/markers/ipr-marker";
import { SMarker } from "../src/models/markers/s-marker";
import { MSMarker } from "../src/models/markers/ms-marker";
import { MRMarker } from "../src/models/markers/mr-marker";
import { TOC1Marker } from "../src/models/markers/toc1-marker";
import { TOC2Marker } from "../src/models/markers/toc2-marker";
import { TOC3Marker } from "../src/models/markers/toc3-marker";
import { TOCA1Marker } from "../src/models/markers/toca1-marker";
import { TOCA2Marker } from "../src/models/markers/toca2-marker";
import { TOCA3Marker } from "../src/models/markers/toca3-marker";
import { MTMarker } from "../src/models/markers/mt-marker";
import { HMarker } from "../src/models/markers/h-marker";
import { SPMarker } from "../src/models/markers/sp-marker";
import { CMarker } from "../src/models/markers/c-marker";
import { CLMarker } from "../src/models/markers/cl-marker";
import { CPMarker } from "../src/models/markers/cp-marker";
import { CAMarker } from "../src/models/markers/ca-marker";
import { CAEndMarker } from "../src/models/markers/ca-end-marker";
import { VAMarker } from "../src/models/markers/va-marker";
import { VAEndMarker } from "../src/models/markers/va-end-marker";
import { PMarker } from "../src/models/markers/p-marker";
import { PCMarker } from "../src/models/markers/pc-marker";
import { MIMarker } from "../src/models/markers/mi-marker";
import { DMarker } from "../src/models/markers/d-marker";
import { NBMarker } from "../src/models/markers/nb-marker";
import { FQMarker } from "../src/models/markers/fq-marker";
import { PIMarker } from "../src/models/markers/pi-marker";
import { MMarker } from "../src/models/markers/m-marker";
import { BMarker } from "../src/models/markers/b-marker";
import { BKMarker } from "../src/models/markers/bk-marker";
import { QSMarker } from "../src/models/markers/qs-marker";
import { TableBlock } from "../src/models/markers/table-block";
import { TRMarker } from "../src/models/markers/tr-marker";
import { TCMarker } from "../src/models/markers/tc-marker";
import { TCRMarker } from "../src/models/markers/tcr-marker";
import { THMarker } from "../src/models/markers/th-marker";
import { THRMarker } from "../src/models/markers/thr-marker";
import { LIMarker } from "../src/models/markers/li-marker";
import { FMarker } from "../src/models/markers/f-marker";
import { FKMarker } from "../src/models/markers/fk-marker";
import { FRMarker } from "../src/models/markers/fr-marker";
import { FVMarker } from "../src/models/markers/fv-marker";
import { QMarker } from "../src/models/markers/q-marker";
import { QRMarker } from "../src/models/markers/qr-marker";
import { QCMarker } from "../src/models/markers/qc-marker";
import { QDMarker } from "../src/models/markers/qd-marker";
import { QACMarker } from "../src/models/markers/qac-marker";
import { QACEndMarker } from "../src/models/markers/qac-end-marker";
import { XMarker } from "../src/models/markers/x-marker";
import { XOMarker } from "../src/models/markers/xo-marker";
import { WMarker } from "../src/models/markers/w-marker";
import { VPMarker } from "../src/models/markers/vp-marker";
import { ADDMarker } from "../src/models/markers/add-marker";
import { CLSMarker } from "../src/models/markers/cls-marker";
import { FPMarker } from "../src/models/markers/fp-marker";
import { ILIMarker } from "../src/models/markers/ili-marker";
import { IOREndMarker } from "../src/models/markers/ior-end-marker";
import { QMMarker } from "../src/models/markers/qm-marker";
import { RMarker } from "../src/models/markers/r-marker";
import { RQMarker } from "../src/models/markers/rq-marker";
import { XQMarker } from "../src/models/markers/xq-marker";
import { XTMarker } from "../src/models/markers/xt-marker";

describe("USFMParserTest", () => {
  let parser: USFMParser;

  beforeEach(() => {
    parser = new USFMParser();
  });

  test("TestIgnoredTags", () => {
    parser = new USFMParser(["bd", "bd*"]);
    const doc = parser.parseFromString("\\v 1 In the beginning \\bd God \\bd*");
    expect(doc.contents.length).toBe(1);
    const vm = doc.contents[0] as VMarker;
    expect(vm.contents.length).toBe(1);
    const tb = vm.contents[0] as TextBlock;
    expect(tb.contents.length).toBe(0);
    expect(tb.text).toBe("In the beginning ");
  });

  test("TestIdentificationMarkers", () => {
    expect(
      (parser.parseFromString("\\id Genesis").contents[0] as IDMarker)
        .textIdentifier
    ).toBe("Genesis");
    expect(
      (parser.parseFromString("\\ide UTF-8").contents[0] as IDEMarker).encoding
    ).toBe("UTF-8");
    expect(
      (parser.parseFromString("\\sts 2").contents[0] as STSMarker).statusText
    ).toBe("2");
    expect(
      (parser.parseFromString("\\usfm 3.0").contents[0] as USFMMarker).version
    ).toBe("3.0");

    const doc = parser.parseFromString("\\rem Remark");
    expect(doc.contents[0]).toBeInstanceOf(REMMarker);
    const rem = doc.contents[0] as REMMarker;
    expect(rem.comment).toBe("Remark");
  });

  test("TestIntroductionMarkers", () => {
    expect(
      (parser.parseFromString("\\imt Title").contents[0] as IMTMarker)
        .introTitle
    ).toBe("Title");
    expect(
      (parser.parseFromString("\\imt").contents[0] as IMTMarker).weight
    ).toBe(1);
    expect(
      (parser.parseFromString("\\imt1").contents[0] as IMTMarker).weight
    ).toBe(1);
    expect(
      (parser.parseFromString("\\imt2").contents[0] as IMTMarker).weight
    ).toBe(2);
    expect(
      (parser.parseFromString("\\imt3").contents[0] as IMTMarker).weight
    ).toBe(3);

    expect(
      (parser.parseFromString("\\is Heading").contents[0] as ISMarker).heading
    ).toBe("Heading");
    expect(
      (parser.parseFromString("\\is").contents[0] as ISMarker).weight
    ).toBe(1);
    expect(
      (parser.parseFromString("\\is1").contents[0] as ISMarker).weight
    ).toBe(1);
    expect(
      (parser.parseFromString("\\is2").contents[0] as ISMarker).weight
    ).toBe(2);
    expect(
      (parser.parseFromString("\\is3").contents[0] as ISMarker).weight
    ).toBe(3);

    expect((parser.parseFromString("\\iq").contents[0] as IQMarker).depth).toBe(
      1
    );
    expect(
      (parser.parseFromString("\\iq1").contents[0] as IQMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\iq2").contents[0] as IQMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\iq3").contents[0] as IQMarker).depth
    ).toBe(3);

    expect(parser.parseFromString("\\ib").contents[0]).not.toBeNull();
    expect(parser.parseFromString("\\ib").contents[0]).toBeInstanceOf(IBMarker);

    expect(
      (parser.parseFromString("\\iot Title").contents[0] as IOTMarker).title
    ).toBe("Title");

    expect((parser.parseFromString("\\io").contents[0] as IOMarker).depth).toBe(
      1
    );
    expect(
      (parser.parseFromString("\\io1").contents[0] as IOMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\io2").contents[0] as IOMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\io3").contents[0] as IOMarker).depth
    ).toBe(3);

    let doc = parser.parseFromString("\\ior (1.1-3)\\ior*");
    expect(doc.contents.length).toBe(2);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("(1.1-3)");

    expect(
      (
        parser.parseFromString("\\ili Text").contents[0]
          .contents[0] as TextBlock
      ).text
    ).toBe("Text");
    expect(
      (parser.parseFromString("\\ili").contents[0] as ILIMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\ili1").contents[0] as ILIMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\ili2").contents[0] as ILIMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\ili3").contents[0] as ILIMarker).depth
    ).toBe(3);

    doc = parser.parseFromString("\\ip Text");
    expect(doc.contents[0]).toBeInstanceOf(IPMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\ipi Text");
    expect(doc.contents[0]).toBeInstanceOf(IPIMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\im Text");
    expect(doc.contents[0]).toBeInstanceOf(IMMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\is Heading");
    expect(doc.contents[0]).toBeInstanceOf(ISMarker);
    expect((doc.contents[0] as ISMarker).heading).toBe("Heading");

    doc = parser.parseFromString("\\iq Quote");
    expect(doc.contents[0]).toBeInstanceOf(IQMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Quote");
    expect(
      (parser.parseFromString("\\iq Quote").contents[0] as IQMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\iq1 Quote").contents[0] as IQMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\iq2 Quote").contents[0] as IQMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\iq3 Quote").contents[0] as IQMarker).depth
    ).toBe(3);

    doc = parser.parseFromString("\\imi Text");
    expect(doc.contents[0]).toBeInstanceOf(IMIMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\ipq Text");
    expect(doc.contents[0]).toBeInstanceOf(IPQMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\imq Text");
    expect(doc.contents[0]).toBeInstanceOf(IMQMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");

    doc = parser.parseFromString("\\ipr Text");
    expect(doc.contents[0]).toBeInstanceOf(IPRMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Text");
  });

  test("TestSectionParse", () => {
    // Section Headings
    expect(
      (
        parser.parseFromString(
          "\\s Silsilah Yesus Kristus \\r (Luk. 3:23 - 38)"
        ).contents[0] as SMarker
      ).text
    ).toBe("Silsilah Yesus Kristus ");
    expect(
      (
        parser.parseFromString(
          "\\s3 Kumpulkanlah Harta di Surga \\r (Luk. 12:33 - 34; 11:34 - 36; 16:13)"
        ).contents[0] as SMarker
      ).text
    ).toBe("Kumpulkanlah Harta di Surga ");
    expect(
      (
        parser.parseFromString(
          "\\s Silsilah Yesus Kristus \\r (Luk. 3:23 - 38)"
        ).contents[0] as SMarker
      ).weight
    ).toBe(1);
    expect(
      (
        parser.parseFromString(
          "\\s2 Silsilah Yesus Kristus \\r (Luk. 3:23 - 38)"
        ).contents[0] as SMarker
      ).weight
    ).toBe(2);
    expect(
      (
        parser.parseFromString(
          "\\s3 Silsilah Yesus Kristus \\r (Luk. 3:23 - 38)"
        ).contents[0] as SMarker
      ).weight
    ).toBe(3);

    // Major Section
    expect(
      (
        parser.parseFromString("\\ms1 jilid 1 \\mr (Mazmur 1 - 41)")
          .contents[0] as MSMarker
      ).heading
    ).toBe("jilid 1 ");
    expect(
      (
        parser.parseFromString("\\ms2 jilid 1 \\mr (Mazmur 1 - 41)")
          .contents[0] as MSMarker
      ).heading
    ).toBe("jilid 1 ");
    expect(
      (
        parser.parseFromString("\\ms3 jilid 1 \\mr (Mazmur 1 - 41)")
          .contents[0] as MSMarker
      ).weight
    ).toBe(3);
    expect(
      (
        parser.parseFromString("\\ms jilid 1 \\mr (Mazmur 1 - 41)")
          .contents[0] as MSMarker
      ).weight
    ).toBe(1);

    // References
    expect(
      (
        parser.parseFromString("\\ms2 jilid 1 \\mr (Mazmur 1 - 41)").contents[0]
          .contents[0] as MRMarker
      ).sectionReference
    ).toBe("(Mazmur 1 - 41)");
    expect(
      (
        parser.parseFromString("\\ms2 jilid 1 \\mr (Mazmur 41)").contents[0]
          .contents[0] as MRMarker
      ).sectionReference
    ).toBe("(Mazmur 41)");
    expect(
      (
        parser.parseFromString("\\ms2 jilid 1 \\mr (Mazmur)").contents[0]
          .contents[0] as MRMarker
      ).sectionReference
    ).toBe("(Mazmur)");
  });

  test("TestTableOfContentsParse", () => {
    // Table of Contents
    expect(
      (parser.parseFromString("\\toc1 Keluaran").contents[0] as TOC1Marker)
        .longTableOfContentsText
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\toc2 Keluaran").contents[0] as TOC2Marker)
        .shortTableOfContentsText
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\toc3 Kel").contents[0] as TOC3Marker)
        .bookAbbreviation
    ).toBe("Kel");
    // Alternate Table of Contents
    expect(
      (parser.parseFromString("\\toca1 Keluaran").contents[0] as TOCA1Marker)
        .altLongTableOfContentsText
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\toca2 Keluaran").contents[0] as TOCA2Marker)
        .altShortTableOfContentsText
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\toca3 Kel").contents[0] as TOCA3Marker)
        .altBookAbbreviation
    ).toBe("Kel");
  });

  test("TestMajorTitleParse", () => {
    expect(
      (parser.parseFromString("\\mt1 Keluaran").contents[0] as MTMarker).title
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\mt3 Keluaran").contents[0] as MTMarker).title
    ).toBe("Keluaran");
    expect(
      (parser.parseFromString("\\mt Keluaran").contents[0] as MTMarker).weight
    ).toBe(1);
    expect(
      (parser.parseFromString("\\mt2 Keluaran").contents[0] as MTMarker).weight
    ).toBe(2);
  });

  test("TestHeaderParse", () => {
    expect(
      (parser.parseFromString("\\h Genesis").contents[0] as HMarker).headerText
    ).toBe("Genesis");
    expect(
      (parser.parseFromString("\\h").contents[0] as HMarker).headerText
    ).toBe("");
    expect(
      (parser.parseFromString("\\h 1 John").contents[0] as HMarker).headerText
    ).toBe("1 John");
    expect(
      (parser.parseFromString("\\h\u00A0\u00A0 ").contents[0] as HMarker)
        .headerText
    ).toBe("");

    const doc = parser.parseFromString("\\sp Job");
    const sp = doc.contents[0] as SPMarker;
    expect(sp.speaker).toBe("Job");
  });

  test("TestChapterParse", () => {
    expect(
      (parser.parseFromString("\\c 1").contents[0] as CMarker).number
    ).toBe(1);
    expect(
      (parser.parseFromString("\\c 1000").contents[0] as CMarker).number
    ).toBe(1000);
    expect(
      (parser.parseFromString("\\c 0").contents[0] as CMarker).number
    ).toBe(0);

    // Chapter Labels
    expect(
      (
        parser.parseFromString("\\c 1 \\cl Chapter One").contents[0]
          .contents[0] as CLMarker
      ).label
    ).toBe("Chapter One");
    expect(
      (parser.parseFromString("\\cl Chapter One \\c 1").contents[0] as CLMarker)
        .label
    ).toBe("Chapter One");
    expect(
      (
        parser.parseFromString("\\c 1 \\cl Chapter One \\c 2 \\cl Chapter Two")
          .contents[1].contents[0] as CLMarker
      ).label
    ).toBe("Chapter Two");

    let doc = parser.parseFromString("\\cp Q");
    expect(doc.contents[0]).toBeInstanceOf(CPMarker);
    expect((doc.contents[0] as CPMarker).publishedChapterMarker).toBe("Q");

    doc = parser.parseFromString("\\ca 53 \\ca*");
    expect(doc.contents.length).toBe(2);
    const caBegin = doc.contents[0] as CAMarker;
    const caEnd = doc.contents[1] as CAEndMarker;
    expect(caBegin.altChapterNumber).toBe("53");

    doc = parser.parseFromString("\\va 22 \\va*");
    expect(doc.contents.length).toBe(2);
    const vaBegin = doc.contents[0] as VAMarker;
    const vaEnd = doc.contents[1] as VAEndMarker;
    expect(vaBegin.altVerseNumber).toBe("22");

    doc = parser.parseFromString(
      "\\p In the beginning God created the heavens and the earth."
    );
    expect(doc.contents[0]).toBeInstanceOf(PMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "In the beginning God created the heavens and the earth."
    );

    doc = parser.parseFromString(
      "\\pc In the beginning God created the heavens and the earth."
    );
    expect(doc.contents[0]).toBeInstanceOf(PCMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "In the beginning God created the heavens and the earth."
    );

    doc = parser.parseFromString(
      "\\p \\v 1 In the beginning God created the heavens and the earth."
    );
    expect(doc.contents[0]).toBeInstanceOf(PMarker);
    const pm = doc.contents[0] as PMarker;
    const vm = pm.contents[0] as VMarker;
    expect((vm.contents[0] as TextBlock).text).toBe(
      "In the beginning God created the heavens and the earth."
    );

    doc = parser.parseFromString("\\mi");
    expect(doc.contents.length).toBe(1);
    expect(doc.contents[0]).toBeInstanceOf(MIMarker);

    doc = parser.parseFromString("\\d A Psalm of David");
    expect((doc.contents[0] as DMarker).description).toBe("A Psalm of David");

    doc = parser.parseFromString("\\nb");
    expect(doc.contents[0]).toBeInstanceOf(NBMarker);

    doc = parser.parseFromString("\\fq the Son of God");
    expect(doc.contents[0]).toBeInstanceOf(FQMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "the Son of God"
    );

    doc = parser.parseFromString("\\pi The one who scattered");
    expect(doc.contents[0]).toBeInstanceOf(PIMarker);
    expect(doc.contents.length).toBe(1);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "The one who scattered"
    );
    expect((parser.parseFromString("\\pi").contents[0] as PIMarker).depth).toBe(
      1
    );
    expect(
      (parser.parseFromString("\\pi1").contents[0] as PIMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\pi2").contents[0] as PIMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\pi3").contents[0] as PIMarker).depth
    ).toBe(3);

    doc = parser.parseFromString("\\m \\v 37 David himself called him 'Lord';");
    expect(doc.contents.length).toBe(1);
    const mm = doc.contents[0] as MMarker;
    expect(mm.contents.length).toBe(1);
    const vm2 = mm.contents[0] as VMarker;
    expect((vm2.contents[0] as TextBlock).text).toBe(
      "David himself called him 'Lord';"
    );

    doc = parser.parseFromString("\\b");
    expect(doc.contents.length).toBe(1);
    expect(doc.contents[0]).toBeInstanceOf(BMarker);
  });

  test("TestVerseParse", () => {
    expect(
      (
        parser.parseFromString(
          '\\v 9 Yahweh God called to the man and said to him, "Where are you?"'
        ).contents[0] as VMarker
      ).verseNumber
    ).toBe("9");
    expect(
      (
        parser.parseFromString(
          '\\v 26 God said, "Let us make man in our image, after our likeness. Let them have dominion over the fish of the sea, over the birds of the sky, over the livestock, over all the earth, and over every creeping thing that creeps on the earth." \\f + \\ft Some ancient copies have: \\fqa ... Over the livestock, over all the animals of the earth, and over every creeping thing that creeps on the earth \\fqa* . \\f*'
        ).contents[0] as VMarker
      ).verseNumber
    ).toBe("26");
    expect(
      (parser.parseFromString("\\v 0 Not in the Bible").contents[0] as VMarker)
        .verseNumber
    ).toBe("0");
    expect(
      (
        parser.parseFromString("\\v 1-2 Not in the Bible")
          .contents[0] as VMarker
      ).verseNumber
    ).toBe("1-2");

    // References - Quoted book title - Parallel passage reference
    expect(
      (
        parser.parseFromString(
          "\\s Silsilah Yesus Kristus \\r (Luk. 3:23 - 38)"
        ).contents[0].contents[0].contents[0] as TextBlock
      ).text
    ).toBe("(Luk. 3:23 - 38)");
    expect(
      (
        parser.parseFromString(
          "\\s Kumpulkanlah Harta di Surga \\r (Luk. 12:33 - 34; 11:34 - 36; 16:13)"
        ).contents[0].contents[0].contents[0] as TextBlock
      ).text
    ).toBe("(Luk. 12:33 - 34; 11:34 - 36; 16:13)");
    expect(
      (
        parser.parseFromString(
          "\\v 14 Itulah sebabnya kata-kata ini ditulis dalam \\bk Kitab Peperangan TUHAN,\\bk*"
        ).contents[0].contents[1] as BKMarker
      ).bookTitle
    ).toBe("Kitab Peperangan TUHAN,");
    expect(
      (
        parser.parseFromString(
          '\\v 5 For God never said to any of his angels,\\q1 "You are my Son;\\q2 today I have become your Father."\\rq Psa 2.7\\rq* '
        ).contents[0].contents[3].contents[0] as TextBlock
      ).text
    ).toBe("Psa 2.7");

    // Closing - Selah
    expect(
      (
        parser.parseFromString("\\cls [[ayt.co/Mat]]").contents[0]
          .contents[0] as TextBlock
      ).text
    ).toBe("[[ayt.co/Mat]]");
    expect(
      (
        parser.parseFromString(
          "\\v 3 Allah datang dari negeri Teman \\q2 dan Yang Mahakudus datang dari Gunung Paran. \\qs Sela \\qs* "
        ).contents[0].contents[1].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("Sela");
    expect(
      (
        parser.parseFromString(
          "\\q2 dan sampai batu yang penghabisan. \\qs Sela \\qs*"
        ).contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("Sela");

    // Transliterated
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 10:15 \\fk dunia orang mati \\ft Dalam bahasa Yunani adalah \\tl Hades\\tl* \\ft , tempat orang setelah meninggal.\\f*"
        ).contents[0].contents[2].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("Hades");
    expect(
      (
        parser.parseFromString("\\v 27 \\tl TEKEL\\tl* :").contents[0]
          .contents[0].contents[0] as TextBlock
      ).text
    ).toBe("TEKEL");
  });

  test("TestTableParse", () => {
    expect(
      parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
        .contents[0]
    ).toBeInstanceOf(TableBlock);

    // Table Rows - Cells
    expect(
      parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
        .contents[0].contents[0]
    ).toBeInstanceOf(TRMarker);
    expect(
      parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
        .contents[0].contents[0].contents[0].contents[0] as TextBlock
    ).toBeInstanceOf(TextBlock);
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[0].contents[0] as TextBlock
      ).text
    ).toBe("dari suku Ruben");
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("12.000");
    expect(
      parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
        .contents[0].contents[0].contents[0] as TCMarker
    ).toBeInstanceOf(TCMarker);
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[0] as TCMarker
      ).columnPosition
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\tr \\tc2 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[0] as TCMarker
      ).columnPosition
    ).toBe(2);
    expect(
      (
        parser.parseFromString("\\tr \\tc3 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[0] as TCMarker
      ).columnPosition
    ).toBe(3);
    expect(
      parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr1 12.000")
        .contents[0].contents[0].contents[1] as TCRMarker
    ).toBeInstanceOf(TCRMarker);
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr1 12.000")
          .contents[0].contents[0].contents[1] as TCRMarker
      ).columnPosition
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[1] as TCRMarker
      ).columnPosition
    ).toBe(2);
    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr3 12.000")
          .contents[0].contents[0].contents[1] as TCRMarker
      ).columnPosition
    ).toBe(3);

    // Test verses
    expect(
      parser.parseFromString("\\tc1 \\v 6 dari suku Asyer").contents[1]
    ).toBeInstanceOf(VMarker);

    // Table Headers
    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr2 12.000")
          .contents[0].contents[0].contents[0].contents[0] as TextBlock
      ).text
    ).toBe("dari suku Ruben");
    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr2 12.000")
          .contents[0].contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("12.000");
    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr2 12.000")
          .contents[0].contents[0].contents[0] as THMarker
      ).columnPosition
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\tr \\th2 dari suku Ruben \\thr 12.000")
          .contents[0].contents[0].contents[0] as THMarker
      ).columnPosition
    ).toBe(2);
    expect(
      (
        parser.parseFromString("\\tr \\th3 dari suku Ruben \\thr 12.000")
          .contents[0].contents[0].contents[0] as THMarker
      ).columnPosition
    ).toBe(3);

    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr1 12.000")
          .contents[0].contents[0].contents[1] as THRMarker
      ).columnPosition
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr2 12.000")
          .contents[0].contents[0].contents[1] as THRMarker
      ).columnPosition
    ).toBe(2);
    expect(
      (
        parser.parseFromString("\\tr \\th1 dari suku Ruben \\thr3 12.000")
          .contents[0].contents[0].contents[1] as THRMarker
      ).columnPosition
    ).toBe(3);

    expect(
      (
        parser.parseFromString("\\tr \\tc1 dari suku Ruben \\tcr2 12.000")
          .contents[0].contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("12.000");
  });

  test("TestListParse", () => {
    // List Items
    expect(
      (
        parser.parseFromString("\\li Peres ayah Hezron.").contents[0]
          .contents[0] as TextBlock
      ).text
    ).toBe("Peres ayah Hezron.");
    expect(
      (
        parser.parseFromString("\\li Peres ayah Hezron.")
          .contents[0] as LIMarker
      ).depth
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\li1 Peres ayah Hezron.")
          .contents[0] as LIMarker
      ).depth
    ).toBe(1);
    expect(
      (
        parser.parseFromString("\\li2 Peres ayah Hezron.")
          .contents[0] as LIMarker
      ).depth
    ).toBe(2);
    expect(
      (
        parser.parseFromString("\\li3 Peres ayah Hezron.")
          .contents[0] as LIMarker
      ).depth
    ).toBe(3);
    // Verse within List
    expect(
      (
        parser.parseFromString(
          "\\li Peres ayah Hezron. \\li \\v 19 Hezron ayah Ram."
        ).contents[1].contents[0] as VMarker
      ).verseNumber
    ).toBe("19");
  });

  test("TestFootnoteParse", () => {
    // Footnote Text Marker
    expect(
      (
        parser.parseFromString("\\f + \\ft Sample Simple Footnote. \\f*")
          .contents[0].contents[0].contents[0] as TextBlock
      ).text
    ).toBe("Sample Simple Footnote. ");

    // Footnote Caller
    expect(
      (
        parser.parseFromString("\\f + \\ft Sample Simple Footnote. \\f*")
          .contents[0] as FMarker
      ).footNoteCaller
    ).toBe("+");
    expect(
      (
        parser.parseFromString("\\f - \\ft Sample Simple Footnote. \\f*")
          .contents[0] as FMarker
      ).footNoteCaller
    ).toBe("-");
    expect(
      (
        parser.parseFromString("\\f abc \\ft Sample Simple Footnote. \\f*")
          .contents[0] as FMarker
      ).footNoteCaller
    ).toBe("abc");

    // Footnote Alternate Translation Marker
    expect(
      (
        parser.parseFromString(
          '\\v 26 God said, "Let us make man in our image, after our likeness. Let them have dominion over the fish of the sea, over the birds of the sky, over the livestock, over all the earth, and over every creeping thing that creeps on the earth." \\f + \\ft Some ancient copies have: \\fqa ... Over the livestock, over all the animals of the earth, and over every creeping thing that creeps on the earth \\fqa* . \\f*'
        ).contents[0].contents[1].contents[1].contents[0] as TextBlock
      ).text
    ).toBe(
      "... Over the livestock, over all the animals of the earth, and over every creeping thing that creeps on the earth "
    );

    // Footnote Keyword
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 1.3 \\fk Tamar \\ft Menantu Yehuda yang akhirnya menjadi istrinya (bc. Kej. 38:1-30).\\f*"
        ).contents[0].contents[1] as FKMarker
      ).footNoteKeyword
    ).toBe("Tamar");

    //Footnote Reference
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 1.3 \\fk Tamar \\ft Menantu Yehuda yang akhirnya menjadi istrinya (bc. Kej. 38:1-30).\\f*"
        ).contents[0].contents[0] as FRMarker
      ).verseReference
    ).toBe("1.3");

    // Footnote Verse Marker - Paragraph
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 9:55 \\ft Beberapa salinan Bahasa Yunani menambahkan: Dan ia berkata, Kamu tidak tahu roh apa yang memilikimu. \\fv 56 \\fv* \\ft Anak Manusia tidak datang untuk menghancurkan hidup manusia, tetapi untuk menyelamatkan mereka.\\f*"
        ).contents[0].contents[2] as FVMarker
      ).verseCharacter
    ).toBe("56");
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 17.25 \\ft Kemungkinan maksudnya adalah bebas dari kewajiban pajak seumur hidup. (bdk. NIV. NET) \\fp \\f*"
        ).contents[0] as FMarker
      ).contents[2]
    ).toBeInstanceOf(FPMarker);

    // Make sure that a fqa end marker doesn't end up outside of the footnote
    expect(
      parser.parseFromString("\\v 1 Words \\f + \\fqa Thing \\fqa* \\f*")
        .contents.length
    ).toBe(1);
  });

  test("TestCrossReferenceParse", () => {
    // Cross Reference Caller
    expect(
      (
        parser.parseFromString("\\x - \\xo 11.21 \\xq Tebes \\xt \\x*")
          .contents[0] as XMarker
      ).crossRefCaller
    ).toBe("-");

    // Cross Reference Origin
    expect(
      (
        parser.parseFromString("\\x - \\xo 11.21 \\xq Tebes \\xt \\x*")
          .contents[0].contents[0] as XOMarker
      ).originRef
    ).toBe("11.21");

    // Cross Reference Target
    expect(
      (
        parser.parseFromString(
          "\\x - \\xo 11.21 \\xq Tebes \\xt Mrk 1.24; Luk 2.39; Jhn 1.45.\\x*"
        ).contents[0].contents[2].contents[0] as TextBlock
      ).text
    ).toBe("Mrk 1.24; Luk 2.39; Jhn 1.45.");

    // Cross Reference Quotation
    expect(
      (
        parser.parseFromString("\\x - \\xo 11.21 \\xq Tebes \\xt \\x*")
          .contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("Tebes");
  });

  test("TestVerseCharacterParse", () => {
    expect(
      (
        parser.parseFromString("\\v 1 \\vp 1a \\vp* This is not Scripture")
          .contents[0].contents[0] as VPMarker
      ).verseCharacter
    ).toBe("1a");
    expect(
      (
        parser.parseFromString("\\v 2 \\vp 2b \\vp* This is not Scripture")
          .contents[0].contents[0] as VPMarker
      ).verseCharacter
    ).toBe("2b");
    expect(
      (
        parser.parseFromString("\\v 1 \\vp asdf \\vp* This is not Scripture")
          .contents[0].contents[0] as VPMarker
      ).verseCharacter
    ).toBe("asdf");
  });

  test("TestTranslationNotesParse", () => {
    // Translator’s addition
    expect(
      (
        parser.parseFromString(
          "\\v 21 Penduduk kota yang satu akan pergi kepada penduduk kota yang lain sambil berkata,\\q2 'Mari kita pergi memohon belas kasihan TUHAN\\q1 \\add dan mencari TUHAN semesta alam!\\add * "
        ).contents[0].contents[3].contents[0] as TextBlock
      ).text
    ).toBe("dan mencari TUHAN semesta alam!");
    expect(
      (
        parser.parseFromString(
          "\\v 1 “Pada tahun pertama pemerintahan Darius, orang Media, aku bangkit untuk menguatkan dan melindungi dia.” \\add (malaikat)\\add* dari Persia."
        ).contents[0].contents[1].contents[0] as TextBlock
      ).text
    ).toBe("(malaikat)");
  });

  test("TestWordEntryParse", () => {
    // Within Footnotes
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w Berhala \\w* di Daftar Istilah.\\f*"
        ).contents[0].contents[2].contents[1] as WMarker
      ).term
    ).toBe("Berhala");

    // Word Entry Attributes
    expect(
      (
        parser.parseFromString(
          "\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w Berhala|Berhala \\w* di Daftar Istilah.\\f*"
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["lemma"]
    ).toBe("Berhala");
    expect(
      (
        parser.parseFromString(
          '\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w gracious|lemma="grace" \\w* di Daftar Istilah.\\f*'
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["lemma"]
    ).toBe("grace");
    expect(
      (
        parser.parseFromString(
          '\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w gracious|lemma="grace" strong="G5485" \\w* di Daftar Istilah.\\f*'
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["strong"]
    ).toBe("G5485");
    expect(
      (
        parser.parseFromString(
          '\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w gracious|strong="H1234,G5485" \\w* di Daftar Istilah.\\f*'
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["strong"]
    ).toBe("H1234,G5485");
    expect(
      (
        parser.parseFromString(
          '\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w gracious|lemma="grace" srcloc="gnt5:51.1.2.1" \\w* di Daftar Istilah.\\f*'
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["srcloc"]
    ).toBe("gnt5:51.1.2.1");
    expect(
      (
        parser.parseFromString(
          '\\f + \\fr 3:5 \\fk berhala \\ft Lih. \\w gracious|lemma="grace" x-myattr="metadata" srcloc="gnt5:51.1.2.1" \\w* di Daftar Istilah.\\f*'
        ).contents[0].contents[2].contents[1] as WMarker
      ).attributes["x-myattr"]
    ).toBe("metadata");
  });

  test("TestUtf8WordEntryParse", () => {
    const parsed = parser.parseFromString(
      '\\w Δαυεὶδ|lemma="Δαυείδ" strong="G11380" x-morph="Gr,N,,,,,GMSI"\\w*'
    );
    expect((parsed.contents[0] as WMarker).term).toBe("Δαυεὶδ");
    expect((parsed.contents[0] as WMarker).attributes["lemma"]).toBe("Δαυείδ");
    expect((parsed.contents[0] as WMarker).attributes["strong"]).toBe("G11380");
    expect((parsed.contents[0] as WMarker).attributes["x-morph"]).toBe(
      "Gr,N,,,,,GMSI"
    );
  });

  test("TestPoetryParse", () => {
    let doc = parser.parseFromString("\\q Quote");
    expect(doc.contents[0]).toBeInstanceOf(QMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Quote");
    expect(
      (parser.parseFromString("\\q Quote").contents[0] as QMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\q1 Quote").contents[0] as QMarker).depth
    ).toBe(1);
    expect(
      (parser.parseFromString("\\q2 Quote").contents[0] as QMarker).depth
    ).toBe(2);
    expect(
      (parser.parseFromString("\\q3 Quote").contents[0] as QMarker).depth
    ).toBe(3);

    doc = parser.parseFromString("\\qr God's love never fails.");
    expect(doc.contents[0]).toBeInstanceOf(QRMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "God's love never fails."
    );

    doc = parser.parseFromString("\\qc Amen! Amen!");
    expect(doc.contents[0]).toBeInstanceOf(QCMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("Amen! Amen!");

    doc = parser.parseFromString("\\qd For the director of music.");
    expect(doc.contents[0]).toBeInstanceOf(QDMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "For the director of music."
    );

    doc = parser.parseFromString("\\qac P\\qac*");
    expect(doc.contents.length).toBe(2);
    const qac = doc.contents[0] as QACMarker;
    const qacEnd = doc.contents[1] as QACEndMarker;
    // The C# test doesn't assert anything specific about qac or qacEnd here.

    doc = parser.parseFromString("\\qm For the director of music.");
    expect(doc.contents[0]).toBeInstanceOf(QMMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "For the director of music."
    );

    doc = parser.parseFromString("\\r (Psalm 51)");
    expect(doc.contents[0]).toBeInstanceOf(RMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("(Psalm 51)");

    doc = parser.parseFromString("\\rq To the choirmaster:");
    expect(doc.contents[0]).toBeInstanceOf(RQMarker);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe(
      "To the choirmaster:"
    );

    doc = parser.parseFromString("\\ior (Psalm 51)\\ior*");
    expect(doc.contents.length).toBe(2);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("(Psalm 51)");
    expect(doc.contents[1]).toBeInstanceOf(IOREndMarker);

    doc = parser.parseFromString("\\li1 First line\\li2 Second line");
    expect(doc.contents.length).toBe(2);
    expect(doc.contents[0]).toBeInstanceOf(LIMarker);
    expect((doc.contents[0] as LIMarker).depth).toBe(1);
    expect((doc.contents[0].contents[0] as TextBlock).text).toBe("First line");
    expect(doc.contents[1]).toBeInstanceOf(LIMarker);
    expect((doc.contents[1] as LIMarker).depth).toBe(2);
    expect((doc.contents[1].contents[0] as TextBlock).text).toBe("Second line");
  });
});
