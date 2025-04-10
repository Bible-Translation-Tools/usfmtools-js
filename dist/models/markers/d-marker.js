"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMarker = void 0;
const marker_1 = require("./marker");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const it_marker_1 = require("./it-marker");
const it_end_marker_1 = require("./it-end-marker");
const text_block_1 = require("./text-block");
class DMarker extends marker_1.Marker {
    getIdentifier() {
        return "d";
    }
    preProcess(input) {
        this.description = input.trim();
        return "";
    }
    getAllowedContents() {
        return [f_marker_1.FMarker, f_end_marker_1.FEndMarker, it_marker_1.ITMarker, it_end_marker_1.ITEndMarker, text_block_1.TextBlock];
    }
}
exports.DMarker = DMarker;
