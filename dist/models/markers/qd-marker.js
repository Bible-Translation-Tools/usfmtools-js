"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const tl_marker_1 = require("./tl-marker");
const tl_end_marker_1 = require("./tl-end-marker");
const w_marker_1 = require("./w-marker");
const w_end_marker_1 = require("./w-end-marker");
/**
 * Hebrew note
 */
class QDMarker extends marker_1.Marker {
    getIdentifier() {
        return "qd";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            text_block_1.TextBlock.name,
            f_marker_1.FMarker.name,
            f_end_marker_1.FEndMarker.name,
            tl_marker_1.TLMarker.name,
            tl_end_marker_1.TLEndMarker.name,
            w_marker_1.WMarker.name,
            w_end_marker_1.WEndMarker.name,
        ];
    }
}
exports.QDMarker = QDMarker;
