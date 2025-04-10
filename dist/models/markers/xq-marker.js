"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XQMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
/**
 * A quotation from the scripture text
 */
class XQMarker extends marker_1.Marker {
    getIdentifier() {
        return "xq";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.XQMarker = XQMarker;
