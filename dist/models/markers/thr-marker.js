"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THRMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class THRMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.columnPosition = 1;
    }
    getIdentifier() {
        return "thr";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.THRMarker = THRMarker;
