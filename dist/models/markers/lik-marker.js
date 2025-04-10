"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIKMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class LIKMarker extends marker_1.Marker {
    getIdentifier() {
        return "lik";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.LIKMarker = LIKMarker;
