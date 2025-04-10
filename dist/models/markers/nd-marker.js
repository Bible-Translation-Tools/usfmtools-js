"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NDMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class NDMarker extends marker_1.Marker {
    getIdentifier() {
        return "nd";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.NDMarker = NDMarker;
