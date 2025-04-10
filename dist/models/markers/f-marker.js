"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FMarker = void 0;
const marker_1 = require("./marker");
const fr_marker_1 = require("./fr-marker");
const fr_end_marker_1 = require("./fr-end-marker");
const fk_marker_1 = require("./fk-marker");
const ft_marker_1 = require("./ft-marker");
const fv_marker_1 = require("./fv-marker");
const fv_end_marker_1 = require("./fv-end-marker");
const fp_marker_1 = require("./fp-marker");
const fqa_marker_1 = require("./fqa-marker");
const fqa_end_marker_1 = require("./fqa-end-marker");
const fq_marker_1 = require("./fq-marker");
const fq_end_marker_1 = require("./fq-end-marker");
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
class FMarker extends marker_1.Marker {
    getIdentifier() {
        return "f";
    }
    preProcess(input) {
        this.footNoteCaller = input.trim();
        return "";
    }
    getAllowedContents() {
        return [
            fr_marker_1.FRMarker,
            fr_end_marker_1.FREndMarker,
            fk_marker_1.FKMarker,
            ft_marker_1.FTMarker,
            fv_marker_1.FVMarker,
            fv_end_marker_1.FVEndMarker,
            fp_marker_1.FPMarker,
            fqa_marker_1.FQAMarker,
            fqa_end_marker_1.FQAEndMarker,
            fq_marker_1.FQMarker,
            fq_end_marker_1.FQEndMarker,
            tl_marker_1.TLMarker,
            tl_end_marker_1.TLEndMarker,
            w_marker_1.WMarker,
            w_end_marker_1.WEndMarker,
            text_block_1.TextBlock,
            it_marker_1.ITMarker,
            it_end_marker_1.ITEndMarker,
            sc_marker_1.SCMarker,
            sc_end_marker_1.SCEndMarker,
            sup_marker_1.SUPMarker,
            sup_end_marker_1.SUPEndMarker,
            bk_marker_1.BKMarker,
            bk_end_marker_1.BKEndMarker,
            bd_marker_1.BDMarker,
            bd_end_marker_1.BDEndMarker,
        ];
    }
}
exports.FMarker = FMarker;
