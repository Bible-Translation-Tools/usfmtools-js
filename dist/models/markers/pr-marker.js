"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class PRMarker extends marker_1.Marker {
    getIdentifier() {
        return "pr";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.PRMarker = PRMarker;
