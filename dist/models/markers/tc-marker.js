"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class TCMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.columnPosition = 1;
    }
    getIdentifier() {
        return "tc";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.TCMarker = TCMarker;
