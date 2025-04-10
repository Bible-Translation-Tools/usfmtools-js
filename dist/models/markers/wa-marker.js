"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WAMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class WAMarker extends marker_1.Marker {
    getIdentifier() {
        return "wa";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.WAMarker = WAMarker;
