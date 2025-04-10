"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class SCMarker extends marker_1.Marker {
    getIdentifier() {
        return "sc";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.SCMarker = SCMarker;
