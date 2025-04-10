"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIGMarker = void 0;
const marker_1 = require("./marker");
class FIGMarker extends marker_1.Marker {
    getIdentifier() {
        return "fig";
    }
    preProcess(input) {
        const trimmedInput = input.trim();
        const wordEntry = trimmedInput.split("|");
        if (wordEntry.length > 0) {
            this.description = wordEntry[0].trim();
        }
        if (wordEntry.length > 1) {
            this.filePath = wordEntry[1].trim();
        }
        if (wordEntry.length > 2) {
            this.width = wordEntry[2].trim();
        }
        if (wordEntry.length > 3) {
            this.location = wordEntry[3].trim();
        }
        if (wordEntry.length > 4) {
            this.copyright = wordEntry[4].trim();
        }
        if (wordEntry.length > 5) {
            this.caption = wordEntry[5].trim();
        }
        if (wordEntry.length > 6) {
            this.reference = wordEntry[6].trim();
        }
        const contentArr = trimmedInput.split("|");
        if (contentArr.length > 0 && contentArr.length <= 2) {
            this.caption = contentArr[0].trim();
            const attributes = contentArr[1] ? contentArr[1].split('"') : [];
            for (let i = 0; i < attributes.length; i++) {
                const attribute = attributes[i].replace(/ /g, "");
                if (attribute.includes("alt=")) {
                    this.description = attributes[i + 1].trim();
                }
                if (attribute.includes("src=")) {
                    this.filePath = attributes[i + 1].trim();
                }
                if (attribute.includes("size=")) {
                    this.width = attributes[i + 1].trim();
                }
                if (attribute.includes("loc=")) {
                    this.location = attributes[i + 1].trim();
                }
                if (attribute.includes("copy=")) {
                    this.copyright = attributes[i + 1].trim();
                }
                if (attribute.includes("ref=")) {
                    this.reference = attributes[i + 1].trim();
                }
            }
        }
        return "";
    }
}
exports.FIGMarker = FIGMarker;
