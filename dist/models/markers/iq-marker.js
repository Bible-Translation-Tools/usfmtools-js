"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class IQMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
    }
    getIdentifier() {
        return "iq";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.IQMarker = IQMarker;
