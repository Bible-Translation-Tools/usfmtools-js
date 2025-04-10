"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPMarker = void 0;
const marker_1 = require("./marker");
class CPMarker extends marker_1.Marker {
    getIdentifier() {
        return "cp";
    }
    preProcess(input) {
        this.publishedChapterMarker = input.trim();
        return "";
    }
}
exports.CPMarker = CPMarker;
