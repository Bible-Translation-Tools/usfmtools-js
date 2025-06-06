"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PMOMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class PMOMarker extends marker_1.Marker {
    getIdentifier() {
        return "pmo";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.PMOMarker = PMOMarker;
