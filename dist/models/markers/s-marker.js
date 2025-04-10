"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMarker = void 0;
const marker_1 = require("./marker");
const r_marker_1 = require("./r-marker");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const sc_marker_1 = require("./sc-marker");
const sc_end_marker_1 = require("./sc-end-marker");
const em_marker_1 = require("./em-marker");
const em_end_marker_1 = require("./em-end-marker");
const bd_marker_1 = require("./bd-marker");
const bd_end_marker_1 = require("./bd-end-marker");
const it_marker_1 = require("./it-marker");
const it_end_marker_1 = require("./it-end-marker");
const bdit_marker_1 = require("./bdit-marker");
const bdit_end_marker_1 = require("./bdit-end-marker");
const no_marker_1 = require("./no-marker");
const no_end_marker_1 = require("./no-end-marker");
const sup_marker_1 = require("./sup-marker");
const sup_end_marker_1 = require("./sup-end-marker");
const text_block_1 = require("./text-block");
class SMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "s";
    }
    preProcess(input) {
        this.text = input.trimStart();
        return "";
    }
    getAllowedContents() {
        return [
            r_marker_1.RMarker.name,
            f_marker_1.FMarker.name,
            f_end_marker_1.FEndMarker.name,
            sc_marker_1.SCMarker.name,
            sc_end_marker_1.SCEndMarker.name,
            em_marker_1.EMMarker.name,
            em_end_marker_1.EMEndMarker.name,
            bd_marker_1.BDMarker.name,
            bd_end_marker_1.BDEndMarker.name,
            it_marker_1.ITMarker.name,
            it_end_marker_1.ITEndMarker.name,
            bdit_marker_1.BDITMarker.name,
            bdit_end_marker_1.BDITEndMarker.name,
            no_marker_1.NOMarker.name,
            no_end_marker_1.NOEndMarker.name,
            sup_marker_1.SUPMarker.name,
            sup_end_marker_1.SUPEndMarker.name,
            text_block_1.TextBlock.name,
        ];
    }
}
exports.SMarker = SMarker;
