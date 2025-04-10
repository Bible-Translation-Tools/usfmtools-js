"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PMarker = void 0;
const marker_1 = require("./marker");
const v_marker_1 = require("./v-marker");
const b_marker_1 = require("./b-marker");
const sp_marker_1 = require("./sp-marker");
const text_block_1 = require("./text-block");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const li_marker_1 = require("./li-marker");
const q_marker_1 = require("./q-marker");
const x_marker_1 = require("./x-marker");
class PMarker extends marker_1.Marker {
    getIdentifier() {
        return "p";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            v_marker_1.VMarker.name,
            b_marker_1.BMarker.name,
            sp_marker_1.SPMarker.name,
            text_block_1.TextBlock.name,
            f_marker_1.FMarker.name,
            f_end_marker_1.FEndMarker.name,
            li_marker_1.LIMarker.name,
            q_marker_1.QMarker.name,
            x_marker_1.XMarker.name,
        ];
    }
}
exports.PMarker = PMarker;
