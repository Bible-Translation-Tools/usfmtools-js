"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidMarker = void 0;
const marker_1 = require("./marker");
class InvalidMarker extends marker_1.Marker {
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
    preProcess(input) {
        this.parsedValue = input;
        return "";
    }
}
exports.InvalidMarker = InvalidMarker;
