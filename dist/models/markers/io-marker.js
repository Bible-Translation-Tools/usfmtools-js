"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
const ior_marker_1 = require("./ior-marker");
const ior_end_marker_1 = require("./ior-end-marker");
class IOMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
    }
    getIdentifier() {
        return "io";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock, ior_marker_1.IORMarker, ior_end_marker_1.IOREndMarker];
    }
}
exports.IOMarker = IOMarker;
