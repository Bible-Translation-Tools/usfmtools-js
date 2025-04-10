"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAMarker = void 0;
const marker_1 = require("./marker");
class VAMarker extends marker_1.Marker {
    getIdentifier() {
        return "va";
    }
    preProcess(input) {
        this.altVerseNumber = input.trim();
        return "";
    }
}
exports.VAMarker = VAMarker;
