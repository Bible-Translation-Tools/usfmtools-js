"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOCA3Marker = void 0;
const marker_1 = require("./marker");
class TOCA3Marker extends marker_1.Marker {
    getIdentifier() {
        return "toca3";
    }
    preProcess(input) {
        this.altBookAbbreviation = input.trim();
        return "";
    }
}
exports.TOCA3Marker = TOCA3Marker;
