"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMarker = void 0;
const marker_1 = require("./marker");
const b_marker_1 = require("./b-marker");
const qs_marker_1 = require("./qs-marker");
const qs_end_marker_1 = require("./qs-end-marker");
const text_block_1 = require("./text-block");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
const tl_marker_1 = require("./tl-marker");
const tl_end_marker_1 = require("./tl-end-marker");
const w_marker_1 = require("./w-marker");
const w_end_marker_1 = require("./w-end-marker");
const v_marker_1 = require("./v-marker");
class QMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.depth = 1;
        this.isPoetryBlock = false;
    }
    getIdentifier() {
        return "q";
    }
    preProcess(input) {
        return input.trimStart();
    }
    getAllowedContents() {
        return [
            b_marker_1.BMarker,
            qs_marker_1.QSMarker,
            qs_end_marker_1.QSEndMarker,
            text_block_1.TextBlock,
            f_marker_1.FMarker,
            f_end_marker_1.FEndMarker,
            tl_marker_1.TLMarker,
            tl_end_marker_1.TLEndMarker,
            w_marker_1.WMarker,
            w_end_marker_1.WEndMarker,
            v_marker_1.VMarker,
        ];
    }
    tryInsert(input) {
        if (input instanceof v_marker_1.VMarker &&
            this.contents.some((m) => m instanceof v_marker_1.VMarker)) {
            return false;
        }
        return super.tryInsert(input);
    }
}
exports.QMarker = QMarker;
