"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
/**
 * Wordlist / Glossary / Dictionary Entry Marker
 */
class WMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        /**
         * @var array{string, string}
         */
        this.attributes = {};
    }
    getIdentifier() {
        return "w";
    }
    getRawValue() {
        let result = this.term || "";
        const attrEntries = Object.entries(this.attributes);
        if (attrEntries.length > 0) {
            const attrStr = attrEntries
                .map(([key, value]) => `${key}="${value}"`)
                .join(" ");
            result += "|" + attrStr;
        }
        return result;
    }
    preProcess(input) {
        const trimmedInput = input.trim();
        const wordEntry = trimmedInput.split("|");
        this.term = wordEntry[0];
        if (wordEntry.length > 1) {
            const wordAttr = wordEntry[1].split(" ");
            for (const attr of wordAttr) {
                const matches = attr.match(WMarker.wordAttributePattern);
                if (matches && matches.length > 0) {
                    if (matches[2].length === 0) {
                        this.attributes["lemma"] = matches[1];
                    }
                    else {
                        this.attributes[matches[1]] = matches[2];
                    }
                }
            }
        }
        return "";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
    isValid() {
        return !marker_1.Marker.isNullOrWhiteSpace(this.term);
    }
}
exports.WMarker = WMarker;
WMarker.wordAttributePattern = /([\p{L}-]+)=?"?([\p{L}\d,:.]*)"?/u;
