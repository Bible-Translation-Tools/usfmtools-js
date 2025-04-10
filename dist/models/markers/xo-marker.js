"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XOMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class XOMarker extends marker_1.Marker {
    getIdentifier() {
        return "xo";
    }
    preProcess(input) {
        this.originRef = input.trim();
        return "";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.XOMarker = XOMarker;
