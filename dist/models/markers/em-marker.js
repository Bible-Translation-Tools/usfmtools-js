"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
/**
 * Emphasis text
 */
class EMMarker extends marker_1.Marker {
    getIdentifier() {
        return "em";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.EMMarker = EMMarker;
