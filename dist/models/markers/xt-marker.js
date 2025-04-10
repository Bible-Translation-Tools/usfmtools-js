"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XTMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class XTMarker extends marker_1.Marker {
    getIdentifier() {
        return "xt";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.XTMarker = XTMarker;
