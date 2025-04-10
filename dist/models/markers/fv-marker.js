"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FVMarker = void 0;
const marker_1 = require("./marker");
class FVMarker extends marker_1.Marker {
    getIdentifier() {
        return "fv";
    }
    preProcess(input) {
        this.verseCharacter = input.trim();
        return "";
    }
}
exports.FVMarker = FVMarker;
