"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USFMMarker = void 0;
const marker_1 = require("./marker");
class USFMMarker extends marker_1.Marker {
    getIdentifier() {
        return "usfm";
    }
    preProcess(input) {
        this.version = input.trim();
        return "";
    }
}
exports.USFMMarker = USFMMarker;
