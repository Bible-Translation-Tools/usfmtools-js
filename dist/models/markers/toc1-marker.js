"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOC1Marker = void 0;
const marker_1 = require("./marker");
class TOC1Marker extends marker_1.Marker {
    getIdentifier() {
        return "toc1";
    }
    preProcess(input) {
        this.longTableOfContentsText = input.trim();
        return "";
    }
}
exports.TOC1Marker = TOC1Marker;
