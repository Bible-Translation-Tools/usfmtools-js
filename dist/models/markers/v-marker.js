"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VMarker = void 0;
const add_end_marker_1 = require("./add-end-marker");
const add_marker_1 = require("./add-marker");
const b_marker_1 = require("./b-marker");
const bd_end_marker_1 = require("./bd-end-marker");
const bd_marker_1 = require("./bd-marker");
const bdit_end_marker_1 = require("./bdit-end-marker");
const bdit_marker_1 = require("./bdit-marker");
const bk_end_marker_1 = require("./bk-end-marker");
const bk_marker_1 = require("./bk-marker");
const cls_marker_1 = require("./cls-marker");
const em_end_marker_1 = require("./em-end-marker");
const em_marker_1 = require("./em-marker");
const f_end_marker_1 = require("./f-end-marker");
const f_marker_1 = require("./f-marker");
const fig_end_marker_1 = require("./fig-end-marker");
const fig_marker_1 = require("./fig-marker");
const fr_end_marker_1 = require("./fr-end-marker");
const fr_marker_1 = require("./fr-marker");
const it_end_marker_1 = require("./it-end-marker");
const it_marker_1 = require("./it-marker");
const k_end_marker_1 = require("./k-end-marker");
const k_marker_1 = require("./k-marker");
const lf_marker_1 = require("./lf-marker");
const li_marker_1 = require("./li-marker");
const lik_end_marker_1 = require("./lik-end-marker");
const lik_marker_1 = require("./lik-marker");
const litl_end_marker_1 = require("./litl-end-marker");
const litl_marker_1 = require("./litl-marker");
const liv_end_marker_1 = require("./liv-end-marker");
const liv_marker_1 = require("./liv-marker");
const m_marker_1 = require("./m-marker");
const marker_1 = require("./marker");
const mi_marker_1 = require("./mi-marker");
const nd_end_marker_1 = require("./nd-end-marker");
const nd_marker_1 = require("./nd-marker");
const no_end_marker_1 = require("./no-end-marker");
const no_marker_1 = require("./no-marker");
const ord_end_marker_1 = require("./ord-end-marker");
const ord_marker_1 = require("./ord-marker");
const p_marker_1 = require("./p-marker");
const pi_marker_1 = require("./pi-marker");
const pmc_marker_1 = require("./pmc-marker");
const pmo_marker_1 = require("./pmo-marker");
const pmr_marker_1 = require("./pmr-marker");
const pn_end_marker_1 = require("./pn-end-marker");
const pn_marker_1 = require("./pn-marker");
const png_end_marker_1 = require("./png-end-marker");
const png_marker_1 = require("./png-marker");
const pr_marker_1 = require("./pr-marker");
const pro_end_marker_1 = require("./pro-end-marker");
const pro_marker_1 = require("./pro-marker");
const q_marker_1 = require("./q-marker");
const qac_end_marker_1 = require("./qac-end-marker");
const qac_marker_1 = require("./qac-marker");
const qc_marker_1 = require("./qc-marker");
const qd_marker_1 = require("./qd-marker");
const qr_marker_1 = require("./qr-marker");
const qs_end_marker_1 = require("./qs-end-marker");
const qs_marker_1 = require("./qs-marker");
const qt_end_marker_1 = require("./qt-end-marker");
const qt_marker_1 = require("./qt-marker");
const rb_end_marker_1 = require("./rb-end-marker");
const rb_marker_1 = require("./rb-marker");
const rem_marker_1 = require("./rem-marker");
const rq_end_marker_1 = require("./rq-end-marker");
const rq_marker_1 = require("./rq-marker");
const s_marker_1 = require("./s-marker");
const sc_end_marker_1 = require("./sc-end-marker");
const sc_marker_1 = require("./sc-marker");
const sig_end_marker_1 = require("./sig-end-marker");
const sig_marker_1 = require("./sig-marker");
const sls_end_marker_1 = require("./sls-end-marker");
const sls_marker_1 = require("./sls-marker");
const sp_marker_1 = require("./sp-marker");
const sup_end_marker_1 = require("./sup-end-marker");
const sup_marker_1 = require("./sup-marker");
const text_block_1 = require("./text-block");
const tl_end_marker_1 = require("./tl-end-marker");
const tl_marker_1 = require("./tl-marker");
const va_end_marker_1 = require("./va-end-marker");
const va_marker_1 = require("./va-marker");
const vp_end_marker_1 = require("./vp-end-marker");
const vp_marker_1 = require("./vp-marker");
const w_end_marker_1 = require("./w-end-marker");
const w_marker_1 = require("./w-marker");
const wa_end_marker_1 = require("./wa-end-marker");
const wa_marker_1 = require("./wa-marker");
const wg_end_marker_1 = require("./wg-end-marker");
const wg_marker_1 = require("./wg-marker");
const wh_end_marker_1 = require("./wh-end-marker");
const wh_marker_1 = require("./wh-marker");
const wj_end_marker_1 = require("./wj-end-marker");
const wj_marker_1 = require("./wj-marker");
const x_end_marker_1 = require("./x-end-marker");
const x_marker_1 = require("./x-marker");
class VMarker extends marker_1.Marker {
    getIdentifier() {
        return "v";
    }
    preProcess(input) {
        const matches = input.match(VMarker.verseRegex);
        if (matches) {
            this.verseNumber = matches[1];
            if (!marker_1.Marker.isNullOrWhiteSpace(this.verseNumber)) {
                const verseBridgeChars = this.verseNumber.split("-");
                this.startingVerse = parseInt(verseBridgeChars[0], 10);
                this.endingVerse =
                    verseBridgeChars.length > 1 &&
                        !marker_1.Marker.isNullOrWhiteSpace(verseBridgeChars[1])
                        ? parseInt(verseBridgeChars[1], 10)
                        : this.startingVerse;
            }
            return matches[2] || "";
        }
        return "";
    }
    getVerseCharacter() {
        const firstCharacterMarker = this.getChildMarkers(vp_marker_1.VPMarker);
        if (firstCharacterMarker.length > 0) {
            const marker = firstCharacterMarker[0];
            return marker.verseCharacter;
        }
        else {
            return this.verseNumber;
        }
    }
    getAllowedContents() {
        return [
            vp_marker_1.VPMarker,
            vp_end_marker_1.VPEndMarker,
            tl_marker_1.TLMarker,
            tl_end_marker_1.TLEndMarker,
            add_marker_1.ADDMarker,
            add_end_marker_1.ADDEndMarker,
            b_marker_1.BMarker,
            bk_marker_1.BKMarker,
            bk_end_marker_1.BKEndMarker,
            bd_marker_1.BDMarker,
            bd_end_marker_1.BDEndMarker,
            it_marker_1.ITMarker,
            it_end_marker_1.ITEndMarker,
            em_marker_1.EMMarker,
            em_end_marker_1.EMEndMarker,
            bdit_marker_1.BDITMarker,
            bdit_end_marker_1.BDITEndMarker,
            sup_marker_1.SUPMarker,
            sup_end_marker_1.SUPEndMarker,
            no_marker_1.NOMarker,
            no_end_marker_1.NOEndMarker,
            sc_marker_1.SCMarker,
            sc_end_marker_1.SCEndMarker,
            nd_marker_1.NDMarker,
            nd_end_marker_1.NDEndMarker,
            q_marker_1.QMarker,
            m_marker_1.MMarker,
            f_marker_1.FMarker,
            f_end_marker_1.FEndMarker,
            fr_marker_1.FRMarker,
            fr_end_marker_1.FREndMarker,
            sp_marker_1.SPMarker,
            text_block_1.TextBlock,
            w_marker_1.WMarker,
            w_end_marker_1.WEndMarker,
            x_marker_1.XMarker,
            x_end_marker_1.XEndMarker,
            cls_marker_1.CLSMarker,
            rq_marker_1.RQMarker,
            rq_end_marker_1.RQEndMarker,
            pi_marker_1.PIMarker,
            mi_marker_1.MIMarker,
            qs_marker_1.QSMarker,
            qs_end_marker_1.QSEndMarker,
            qr_marker_1.QRMarker,
            qc_marker_1.QCMarker,
            qd_marker_1.QDMarker,
            qac_marker_1.QACMarker,
            qac_end_marker_1.QACEndMarker,
            s_marker_1.SMarker,
            va_marker_1.VAMarker,
            va_end_marker_1.VAEndMarker,
            k_marker_1.KMarker,
            k_end_marker_1.KEndMarker,
            lf_marker_1.LFMarker,
            lik_marker_1.LIKMarker,
            lik_end_marker_1.LIKEndMarker,
            litl_marker_1.LITLMarker,
            litl_end_marker_1.LITLEndMarker,
            liv_marker_1.LIVMarker,
            liv_end_marker_1.LIVEndMarker,
            ord_marker_1.ORDMarker,
            ord_end_marker_1.ORDEndMarker,
            pmc_marker_1.PMCMarker,
            pmo_marker_1.PMOMarker,
            pmr_marker_1.PMRMarker,
            pn_marker_1.PNMarker,
            pn_end_marker_1.PNEndMarker,
            png_marker_1.PNGMarker,
            png_end_marker_1.PNGEndMarker,
            pr_marker_1.PRMarker,
            qt_marker_1.QTMarker,
            qt_end_marker_1.QTEndMarker,
            rb_marker_1.RBMarker,
            rb_end_marker_1.RBEndMarker,
            sig_marker_1.SIGMarker,
            sig_end_marker_1.SIGEndMarker,
            sls_marker_1.SLSMarker,
            sls_end_marker_1.SLSEndMarker,
            wa_marker_1.WAMarker,
            wa_end_marker_1.WAEndMarker,
            wg_marker_1.WGMarker,
            wg_end_marker_1.WGEndMarker,
            wh_marker_1.WHMarker,
            wh_end_marker_1.WHEndMarker,
            wj_marker_1.WJMarker,
            wj_end_marker_1.WJEndMarker,
            fig_marker_1.FIGMarker,
            fig_end_marker_1.FIGEndMarker,
            pn_marker_1.PNMarker,
            pn_end_marker_1.PNEndMarker,
            pro_marker_1.PROMarker,
            pro_end_marker_1.PROEndMarker,
            rem_marker_1.REMMarker,
            p_marker_1.PMarker,
            li_marker_1.LIMarker,
        ];
    }
    tryInsert(input) {
        if (input instanceof VMarker) {
            return false;
        }
        if (input instanceof q_marker_1.QMarker && input.isPoetryBlock) {
            return false;
        }
        return super.tryInsert(input);
    }
}
exports.VMarker = VMarker;
VMarker.verseRegex = /^ *([0-9]*-?[0-9]*) ?(.*)/;
