"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOCA1Marker = void 0;
const marker_1 = require("./marker");
class TOCA1Marker extends marker_1.Marker {
    getIdentifier() {
        return "toca1";
    }
    preProcess(input) {
        this.altLongTableOfContentsText = input.trim();
        return "";
    }
}
exports.TOCA1Marker = TOCA1Marker;
