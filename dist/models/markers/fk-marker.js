"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FKMarker = void 0;
const marker_1 = require("./marker");
class FKMarker extends marker_1.Marker {
    getIdentifier() {
        return "fk";
    }
    preProcess(input) {
        this.footNoteKeyword = input.trim();
        return "";
    }
}
exports.FKMarker = FKMarker;
