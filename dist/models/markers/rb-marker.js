"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class RBMarker extends marker_1.Marker {
    getIdentifier() {
        return "rb";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.RBMarker = RBMarker;
