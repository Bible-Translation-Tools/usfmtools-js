"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WGMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class WGMarker extends marker_1.Marker {
    getIdentifier() {
        return "wg";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.WGMarker = WGMarker;
