"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILIMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class ILIMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
    }
    getIdentifier() {
        return "ili";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [text_block_1.TextBlock];
    }
}
exports.ILIMarker = ILIMarker;
