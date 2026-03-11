"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAMarker = void 0;
const marker_1 = require("./marker");
class VAMarker extends marker_1.Marker {
    getIdentifier() {
        return "va";
    }
    getRawValue() {
        return this.altVerseNumber || "";
    }
    preProcess(input) {
        this.altVerseNumber = input.trim();
        return "";
    }
    isValid() {
        return !marker_1.Marker.isNullOrWhiteSpace(this.altVerseNumber);
    }
}
exports.VAMarker = VAMarker;
