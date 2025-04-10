"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class SUPMarker extends marker_1.Marker {
    getIdentifier() {
        return "sup";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.SUPMarker = SUPMarker;
