"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMarker = void 0;
const marker_1 = require("./marker");
const xo_marker_1 = require("./xo-marker");
const xt_marker_1 = require("./xt-marker");
const xq_marker_1 = require("./xq-marker");
const text_block_1 = require("./text-block");
class XMarker extends marker_1.Marker {
    getIdentifier() {
        return "x";
    }
    preProcess(input) {
        this.crossRefCaller = input.trim();
        return "";
    }
    getAllowedContents() {
        return [xo_marker_1.XOMarker, xt_marker_1.XTMarker, xq_marker_1.XQMarker, text_block_1.TextBlock];
    }
}
exports.XMarker = XMarker;
