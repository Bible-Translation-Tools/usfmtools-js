"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCRMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class TCRMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.columnPosition = 1;
    }
    getIdentifier() {
        return "tcr";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.TCRMarker = TCRMarker;
