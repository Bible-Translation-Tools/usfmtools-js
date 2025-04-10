"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOC3Marker = void 0;
const marker_1 = require("./marker");
class TOC3Marker extends marker_1.Marker {
    getIdentifier() {
        return "toc3";
    }
    preProcess(input) {
        this.bookAbbreviation = input.trim();
        return "";
    }
}
exports.TOC3Marker = TOC3Marker;
