"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRMarker = void 0;
const marker_1 = require("./marker");
class FRMarker extends marker_1.Marker {
    getIdentifier() {
        return "fr";
    }
    preProcess(input) {
        this.verseReference = input.trim();
        return "";
    }
}
exports.FRMarker = FRMarker;
