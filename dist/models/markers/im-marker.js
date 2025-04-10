"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
const bk_marker_1 = require("./bk-marker");
const bk_end_marker_1 = require("./bk-end-marker");
const bd_marker_1 = require("./bd-marker");
const bd_end_marker_1 = require("./bd-end-marker");
const it_marker_1 = require("./it-marker");
const it_end_marker_1 = require("./it-end-marker");
class IMMarker extends marker_1.Marker {
    getIdentifier() {
        return "im";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [
            text_block_1.TextBlock.name,
            bk_marker_1.BKMarker.name,
            bk_end_marker_1.BKEndMarker.name,
            bd_marker_1.BDMarker.name,
            bd_end_marker_1.BDEndMarker.name,
            it_marker_1.ITMarker.name,
            it_end_marker_1.ITEndMarker.name,
        ];
    }
}
exports.IMMarker = IMMarker;
