"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOC2Marker = void 0;
const marker_1 = require("./marker");
class TOC2Marker extends marker_1.Marker {
    getIdentifier() {
        return "toc2";
    }
    preProcess(input) {
        this.shortTableOfContentsText = input.trim();
        return "";
    }
}
exports.TOC2Marker = TOC2Marker;
