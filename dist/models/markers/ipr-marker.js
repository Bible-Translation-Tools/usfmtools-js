"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPRMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
const bk_marker_1 = require("./bk-marker");
const bk_end_marker_1 = require("./bk-end-marker");
const bd_marker_1 = require("./bd-marker");
const bd_end_marker_1 = require("./bd-end-marker");
const it_marker_1 = require("./it-marker");
const it_end_marker_1 = require("./it-end-marker");
const sc_marker_1 = require("./sc-marker");
const sc_end_marker_1 = require("./sc-end-marker");
const bdit_marker_1 = require("./bdit-marker");
const bdit_end_marker_1 = require("./bdit-end-marker");
const nd_marker_1 = require("./nd-marker");
const nd_end_marker_1 = require("./nd-end-marker");
const no_marker_1 = require("./no-marker");
const no_end_marker_1 = require("./no-end-marker");
const sup_marker_1 = require("./sup-marker");
const sup_end_marker_1 = require("./sup-end-marker");
class IPRMarker extends marker_1.Marker {
    getIdentifier() {
        return "ipr";
    }
    preProcess(input) {
        return input.trim();
    }
    getAllowedContents() {
        return [
            text_block_1.TextBlock,
            bk_marker_1.BKMarker,
            bk_end_marker_1.BKEndMarker,
            bd_marker_1.BDMarker,
            bd_end_marker_1.BDEndMarker,
            it_marker_1.ITMarker,
            it_end_marker_1.ITEndMarker,
            sc_marker_1.SCMarker,
            sc_end_marker_1.SCEndMarker,
            bdit_marker_1.BDITMarker,
            bdit_end_marker_1.BDITEndMarker,
            nd_marker_1.NDMarker,
            nd_end_marker_1.NDEndMarker,
            no_marker_1.NOMarker,
            no_end_marker_1.NOEndMarker,
            sup_marker_1.SUPMarker,
            sup_end_marker_1.SUPEndMarker,
        ];
    }
}
exports.IPRMarker = IPRMarker;
