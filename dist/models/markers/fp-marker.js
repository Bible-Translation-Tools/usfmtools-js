"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FPMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class FPMarker extends marker_1.Marker {
    getIdentifier() {
        return "fp";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.FPMarker = FPMarker;
