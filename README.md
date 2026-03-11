# usfmtools-js

A TypeScript/JavaScript parser for [USFM](https://ubsicap.github.io/usfm/) (Unified Standard Format Markers), the standard encoding format for Scripture translations.

# Description

usfmtools-js parses USFM text into an abstract syntax tree of typed marker objects that you can traverse, query, validate, and serialize back to USFM.

# Installation

```bash
npm install usfmtools
```

# Requirements

We targeted ES2020 and Node.js 14+.

# Contributing

Yes please! A couple things would be very helpful

- Testing: Because I can't test every single possible USFM document in existence. If you find something that doesn't look right in the parsing or rendering please submit an issue.
- Adding support for other markers to the parser. There are still plenty of things in the USFM spec that aren't implemented.

# Usage

## Parsing a USFM file

```typescript
import { USFMParser, CMarker, VMarker, TextBlock } from "usfmtools";
import fs from "fs";

const parser = new USFMParser();
const usfm = fs.readFileSync("01-GEN.usfm", "utf8");
const doc = parser.parseFromString(usfm);
```

## Querying markers

`getChildMarkers<T>()` recursively finds all descendants of a given marker type:

```typescript
// Get all chapters
const chapters = doc.getChildMarkers(CMarker);
for (const ch of chapters) {
  console.log(`Chapter ${ch.number}`);
}

// Get all verses in the document
const verses = doc.getChildMarkers(VMarker);
for (const v of verses) {
  console.log(`Verse ${v.verseNumber}`);
}

// Get verses within a specific chapter
const chapter1 = chapters.find(c => c.number === 1);
const versesInCh1 = chapter1.getChildMarkers(VMarker);

// Get all text content within a verse
const textBlocks = versesInCh1[0].getChildMarkers(TextBlock);
const verseText = textBlocks.map(tb => tb.text).join("");
```

## Constructor options

`USFMParser` accepts three optional parameters:

```typescript
// Default: parse everything
const parser = new USFMParser();

// Ignore specific tags (e.g. bold markers)
const parser = new USFMParser(["bd", "bd*"]);

// Ignore unknown markers (second parameter)
// Unknown markers become TextBlocks with just their text content
const parser = new USFMParser(null, true);

// Ignore invalid markers (third parameter)
// Invalid markers (markers missing required values) are silently dropped
const parser = new USFMParser(null, false, true);
```

## Working with the document tree

Every marker has a `contents` array of child markers:

```typescript
const doc = parser.parseFromString("\\c 1 \\p \\v 1 In the beginning");

// Direct traversal
const chapter = doc.contents[0] as CMarker;      // \c 1
const paragraph = chapter.contents[0] as PMarker; // \p
const verse = paragraph.contents[0] as VMarker;   // \v 1
const text = verse.contents[0] as TextBlock;       // "In the beginning"

// Merging documents
const doc2 = parser.parseFromString("\\c 2 \\p \\v 1 More text");
doc.insert(doc2);
```

## Serializing back to USFM

Use `getRawContents()` to convert the marker tree back to a USFM string:

```typescript
const doc = parser.parseFromString("\\id GEN \\c 1 \\p \\v 1 In the beginning");
const usfm = doc.getRawContents();
// => "\\id GEN \\c 1 \\p \\v 1 In the beginning"
```

## Handling unknown and invalid markers

The parser produces two special marker types for error handling:

- **`UnknownMarker`** -- for marker tags that aren't part of the USFM spec (e.g. `\xyz`).
- **`InvalidMarker`** -- for known markers that are missing their required value (e.g. `\c` without a chapter number, `\v` without a verse number).

```typescript
import { UnknownMarker, InvalidMarker } from "usfmtools";

const doc = parser.parseFromString("\\id GEN \\c \\p \\v 1 Text \\xyz data");

// Find markers with missing required values
const invalid = doc.getChildMarkers(InvalidMarker);
for (const m of invalid) {
  console.log(`Invalid \\${m.parsedIdentifier} at line ${m.line}`);
}

// Find unrecognized markers
const unknown = doc.getChildMarkers(UnknownMarker);
for (const m of unknown) {
  console.log(`Unknown \\${m.parsedIdentifier}: ${m.parsedValue}`);
}
```

## Marker validation

Markers that require a value override `isValid()`. You can check validity on any marker instance:

```typescript
const cm = new CMarker();
cm.preProcess("5");
cm.isValid(); // true

const cm2 = new CMarker();
cm2.preProcess("");
cm2.isValid(); // false
```

Markers with required values: `\c`, `\v`, `\id`, `\ide`, `\usfm`, `\sts`, `\f`, `\x`, `\fr`, `\xo`, `\ca`, `\va`, `\fv`, `\fig`, `\w`.

## Footnotes and cross references

```typescript
import { FMarker, FRMarker, FTMarker, XMarker, XOMarker } from "usfmtools";

const doc = parser.parseFromString(
  "\\v 1 Text \\f + \\fr 1.1 \\ft A footnote. \\f*"
);

const verse = doc.getChildMarkers(VMarker)[0];
const footnotes = verse.getChildMarkers(FMarker);

for (const fn of footnotes) {
  console.log(`Caller: ${fn.footNoteCaller}`);
  const ref = fn.getChildMarkers(FRMarker)[0];
  console.log(`Reference: ${ref?.verseReference}`);
}
```

## Word entries and attributes

```typescript
import { WMarker } from "usfmtools";

const doc = parser.parseFromString(
  '\\v 1 \\w gracious|lemma="grace" strong="G5485" \\w*'
);

const words = doc.getChildMarkers(WMarker);
for (const w of words) {
  console.log(`Term: ${w.term}`);
  console.log(`Lemma: ${w.attributes["lemma"]}`);
  console.log(`Strong: ${w.attributes["strong"]}`);
}
```
