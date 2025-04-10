"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPMarker = void 0;
const marker_1 = require("./marker");
class VPMarker extends marker_1.Marker {
    getIdentifier() {
        return "vp";
    }
    preProcess(input) {
        this.verseCharacter = input.trim();
        return "";
    }
}
exports.VPMarker = VPMarker;
