"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIMarker = void 0;
const marker_1 = require("./marker");
const v_marker_1 = require("./v-marker");
const text_block_1 = require("./text-block");
class LIMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
    }
    getIdentifier() {
        return "li";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [v_marker_1.VMarker, text_block_1.TextBlock];
    }
}
exports.LIMarker = LIMarker;
