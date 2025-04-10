"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNGMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class PNGMarker extends marker_1.Marker {
    getIdentifier() {
        return "png";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.PNGMarker = PNGMarker;
