"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class ORDMarker extends marker_1.Marker {
    getIdentifier() {
        return "ord";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.ORDMarker = ORDMarker;
