"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAMarker = void 0;
const marker_1 = require("./marker");
/**
 * Alternate chapter number
 */
class CAMarker extends marker_1.Marker {
    getIdentifier() {
        return "ca";
    }
    preProcess(input) {
        this.altChapterNumber = input.trim();
        return "";
    }
}
exports.CAMarker = CAMarker;
