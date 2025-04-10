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
            b_marker_1.BMarker.name,
            qs_marker_1.QSMarker.name,
            qs_end_marker_1.QSEndMarker.name,
            text_block_1.TextBlock.name,
            f_marker_1.FMarker.name,
            f_end_marker_1.FEndMarker.name,
            tl_marker_1.TLMarker.name,
            tl_end_marker_1.TLEndMarker.name,
            w_marker_1.WMarker.name,
            w_end_marker_1.WEndMarker.name,
            v_marker_1.VMarker.name,
        ];
    }
    tryInsert(input) {
        if (input.constructor.name === v_marker_1.VMarker.name &&
            this.contents.some((m) => m.constructor.name === v_marker_1.VMarker.name)) {
            return false;
        }
        return super.tryInsert(input);
    }
}
exports.QMarker = QMarker;
