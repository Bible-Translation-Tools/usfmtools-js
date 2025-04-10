"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTMarker = void 0;
const marker_1 = require("./marker");
const tl_marker_1 = require("./tl-marker");
const tl_end_marker_1 = require("./tl-end-marker");
const w_marker_1 = require("./w-marker");
const w_end_marker_1 = require("./w-end-marker");
const text_block_1 = require("./text-block");
const it_marker_1 = require("./it-marker");
const it_end_marker_1 = require("./it-end-marker");
const sc_marker_1 = require("./sc-marker");
const sc_end_marker_1 = require("./sc-end-marker");
const sup_marker_1 = require("./sup-marker");
const sup_end_marker_1 = require("./sup-end-marker");
const bk_marker_1 = require("./bk-marker");
const bk_end_marker_1 = require("./bk-end-marker");
const bd_marker_1 = require("./bd-marker");
const bd_end_marker_1 = require("./bd-end-marker");
class FTMarker extends marker_1.Marker {
    getIdentifier() {
        return "ft";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            tl_marker_1.TLMarker.name,
            tl_end_marker_1.TLEndMarker.name,
            w_marker_1.WMarker.name,
            w_end_marker_1.WEndMarker.name,
            text_block_1.TextBlock.name,
            it_marker_1.ITMarker.name,
            it_end_marker_1.ITEndMarker.name,
            sc_marker_1.SCMarker.name,
            sc_end_marker_1.SCEndMarker.name,
            sup_marker_1.SUPMarker.name,
            sup_end_marker_1.SUPEndMarker.name,
            bk_marker_1.BKMarker.name,
            bk_end_marker_1.BKEndMarker.name,
            bd_marker_1.BDMarker.name,
            bd_end_marker_1.BDEndMarker.name,
        ];
    }
}
exports.FTMarker = FTMarker;
