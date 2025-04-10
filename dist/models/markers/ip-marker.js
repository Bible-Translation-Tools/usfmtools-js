"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPMarker = void 0;
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
const ie_marker_1 = require("./ie-marker");
const rq_marker_1 = require("./rq-marker");
const rq_end_marker_1 = require("./rq-end-marker");
class IPMarker extends marker_1.Marker {
    getIdentifier() {
        return "ip";
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
            sc_marker_1.SCMarker.name,
            sc_end_marker_1.SCEndMarker.name,
            bdit_marker_1.BDITMarker.name,
            bdit_end_marker_1.BDITEndMarker.name,
            nd_marker_1.NDMarker.name,
            nd_end_marker_1.NDEndMarker.name,
            no_marker_1.NOMarker.name,
            no_end_marker_1.NOEndMarker.name,
            sup_marker_1.SUPMarker.name,
            sup_end_marker_1.SUPEndMarker.name,
            ie_marker_1.IEMarker.name,
            rq_marker_1.RQMarker.name,
            rq_end_marker_1.RQEndMarker.name,
        ];
    }
}
exports.IPMarker = IPMarker;
