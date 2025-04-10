"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIVMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class LIVMarker extends marker_1.Marker {
    getIdentifier() {
        return "liv";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.LIVMarker = LIVMarker;
