# usfmtools-js

A javascript parser and rendering toolkit for USFM.

# Description

usfmools-js is a parser and a collection of renderers for javascript

# Installation

You can install this package from npm.js https://www.npmjs.com/package/usfmtools

# Requirements

We targeted ES2020 and node-js 14

# Contributing

Yes please! A couple things would be very helpful

- Testing: Because I can't test every single possible USFM document in existance. If you find something that doesn't look right in the parsing or rendering please submit an issue.
- Adding support for other markers to the parser. There are still plenty of things in the USFM spec that aren't implemented.

# Usage

There a couple useful classes that you'll want to use

## USFMDocument

This class is a tree of objects that represent a USFM document  
There are a couple of methods and properties that you'll find useful

```javascript
const output = new USFMDocument();
// The contents of the document
output.contents;
// To find all the child markers of a certain type (in this case chapters)
output.getChildMarkers(CMarker.name);
// To merge the contents of one USFMDocument with another
const otherDocument = new USFMDocument();
output.insert(otherDocument);
```

## USFMParser

This class creates an abstract syntax tree from a USFM string. It can also be passed a
list of specific markers as strings into its constructor to ignore them if needed.

Example:

```javascript
const parser = new USFMParser();
const contents = fs.readFileSync("01-GEN.usfm", "utf8");
const output = parser.parseFromString(contents.toString());

// Get only chapter markers
const chapters = output.getChildMarkers(CMarker);
```
