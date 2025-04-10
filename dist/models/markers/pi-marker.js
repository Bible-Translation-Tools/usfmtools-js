"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIMarker = void 0;
const marker_1 = require("./marker");
const v_marker_1 = require("./v-marker");
const b_marker_1 = require("./b-marker");
const sp_marker_1 = require("./sp-marker");
const text_block_1 = require("./text-block");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const li_marker_1 = require("./li-marker");
const q_marker_1 = require("./q-marker");
class PIMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
    }
    getIdentifier() {
        return "pi";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            v_marker_1.VMarker,
            b_marker_1.BMarker,
            sp_marker_1.SPMarker,
            text_block_1.TextBlock,
            f_marker_1.FMarker,
            f_end_marker_1.FEndMarker,
            li_marker_1.LIMarker,
            q_marker_1.QMarker,
        ];
    }
}
exports.PIMarker = PIMarker;
