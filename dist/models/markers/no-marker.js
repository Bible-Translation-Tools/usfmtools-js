"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class NOMarker extends marker_1.Marker {
    getIdentifier() {
        return "no";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.NOMarker = NOMarker;
