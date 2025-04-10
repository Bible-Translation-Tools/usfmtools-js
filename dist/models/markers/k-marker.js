"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
/**
 * Normal Text
 */
class KMarker extends marker_1.Marker {
    getIdentifier() {
        return "k";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.KMarker = KMarker;
