"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class PNMarker extends marker_1.Marker {
    getIdentifier() {
        return "pn";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.PNMarker = PNMarker;
