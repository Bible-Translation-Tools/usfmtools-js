"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOCA2Marker = void 0;
const marker_1 = require("./marker");
class TOCA2Marker extends marker_1.Marker {
    getIdentifier() {
        return "toca2";
    }
    preProcess(input) {
        this.altShortTableOfContentsText = input.trim();
        return "";
    }
}
exports.TOCA2Marker = TOCA2Marker;
