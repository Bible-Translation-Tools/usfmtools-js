"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownMarker = void 0;
const marker_1 = require("./marker");
class UnknownMarker extends marker_1.Marker {
    constructor() {
        super();
        this.line = 0;
    }
    getIdentifier() {
        return "";
    }
    getRawValue() {
        return this.parsedValue || "";
    }
    getRawContents() {
        let result = "";
        if (this.parsedIdentifier) {
            result = "\\" + this.parsedIdentifier;
        }
        const rawValue = this.getRawValue();
        if (rawValue) {
            result += " " + rawValue;
        }
        for (const child of this.contents) {
            const childContent = child.getRawContents();
            if (childContent.length > 0 &&
                result.length > 0 &&
                !result.endsWith(" ") &&
                !childContent.startsWith(" ")) {
                result += " ";
            }
            result += childContent;
        }
        return result;
    }
    preProcess(input) {
        this.parsedValue = input;
        return "";
    }
}
exports.UnknownMarker = UnknownMarker;
