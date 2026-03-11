"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BDITMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class BDITMarker extends marker_1.Marker {
    getIdentifier() {
        return "bdit";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.BDITMarker = BDITMarker;
