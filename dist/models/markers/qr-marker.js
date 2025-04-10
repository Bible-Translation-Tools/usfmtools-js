"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const tl_marker_1 = require("./tl-marker");
const tl_end_marker_1 = require("./tl-end-marker");
const w_marker_1 = require("./w-marker");
const w_end_marker_1 = require("./w-end-marker");
class QRMarker extends marker_1.Marker {
    getIdentifier() {
        return "qr";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            text_block_1.TextBlock,
            f_marker_1.FMarker,
            f_end_marker_1.FEndMarker,
            tl_marker_1.TLMarker,
            tl_end_marker_1.TLEndMarker,
            w_marker_1.WMarker,
            w_end_marker_1.WEndMarker,
        ];
    }
}
exports.QRMarker = QRMarker;
