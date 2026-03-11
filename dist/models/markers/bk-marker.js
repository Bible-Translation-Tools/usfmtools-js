"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BKMarker = void 0;
const marker_1 = require("./marker");
class BKMarker extends marker_1.Marker {
    getIdentifier() {
        return "bk";
    }
    getRawValue() {
        return this.bookTitle || "";
    }
    preProcess(input) {
        this.bookTitle = input.trim();
        return "";
    }
}
exports.BKMarker = BKMarker;
