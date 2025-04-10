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
        const firstCharacterMarker = this.getChildMarkers(vp_marker_1.VPMarker.name);
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
            vp_marker_1.VPMarker.name,
            vp_end_marker_1.VPEndMarker.name,
            tl_marker_1.TLMarker.name,
            tl_end_marker_1.TLEndMarker.name,
            add_marker_1.ADDMarker.name,
            add_end_marker_1.ADDEndMarker.name,
            b_marker_1.BMarker.name,
            bk_marker_1.BKMarker.name,
            bk_end_marker_1.BKEndMarker.name,
            bd_marker_1.BDMarker.name,
            bd_end_marker_1.BDEndMarker.name,
            it_marker_1.ITMarker.name,
            it_end_marker_1.ITEndMarker.name,
            em_marker_1.EMMarker.name,
            em_end_marker_1.EMEndMarker.name,
            bdit_marker_1.BDITMarker.name,
            bdit_end_marker_1.BDITEndMarker.name,
            sup_marker_1.SUPMarker.name,
            sup_end_marker_1.SUPEndMarker.name,
            no_marker_1.NOMarker.name,
            no_end_marker_1.NOEndMarker.name,
            sc_marker_1.SCMarker.name,
            sc_end_marker_1.SCEndMarker.name,
            nd_marker_1.NDMarker.name,
            nd_end_marker_1.NDEndMarker.name,
            q_marker_1.QMarker.name,
            m_marker_1.MMarker.name,
            f_marker_1.FMarker.name,
            f_end_marker_1.FEndMarker.name,
            fr_marker_1.FRMarker.name,
            fr_end_marker_1.FREndMarker.name,
            sp_marker_1.SPMarker.name,
            text_block_1.TextBlock.name,
            w_marker_1.WMarker.name,
            w_end_marker_1.WEndMarker.name,
            x_marker_1.XMarker.name,
            x_end_marker_1.XEndMarker.name,
            cls_marker_1.CLSMarker.name,
            rq_marker_1.RQMarker.name,
            rq_end_marker_1.RQEndMarker.name,
            pi_marker_1.PIMarker.name,
            mi_marker_1.MIMarker.name,
            qs_marker_1.QSMarker.name,
            qs_end_marker_1.QSEndMarker.name,
            qr_marker_1.QRMarker.name,
            qc_marker_1.QCMarker.name,
            qd_marker_1.QDMarker.name,
            qac_marker_1.QACMarker.name,
            qac_end_marker_1.QACEndMarker.name,
            s_marker_1.SMarker.name,
            va_marker_1.VAMarker.name,
            va_end_marker_1.VAEndMarker.name,
            k_marker_1.KMarker.name,
            k_end_marker_1.KEndMarker.name,
            lf_marker_1.LFMarker.name,
            lik_marker_1.LIKMarker.name,
            lik_end_marker_1.LIKEndMarker.name,
            litl_marker_1.LITLMarker.name,
            litl_end_marker_1.LITLEndMarker.name,
            liv_marker_1.LIVMarker.name,
            liv_end_marker_1.LIVEndMarker.name,
            ord_marker_1.ORDMarker.name,
            ord_end_marker_1.ORDEndMarker.name,
            pmc_marker_1.PMCMarker.name,
            pmo_marker_1.PMOMarker.name,
            pmr_marker_1.PMRMarker.name,
            pn_marker_1.PNMarker.name,
            pn_end_marker_1.PNEndMarker.name,
            png_marker_1.PNGMarker.name,
            png_end_marker_1.PNGEndMarker.name,
            pr_marker_1.PRMarker.name,
            qt_marker_1.QTMarker.name,
            qt_end_marker_1.QTEndMarker.name,
            rb_marker_1.RBMarker.name,
            rb_end_marker_1.RBEndMarker.name,
            sig_marker_1.SIGMarker.name,
            sig_end_marker_1.SIGEndMarker.name,
            sls_marker_1.SLSMarker.name,
            sls_end_marker_1.SLSEndMarker.name,
            wa_marker_1.WAMarker.name,
            wa_end_marker_1.WAEndMarker.name,
            wg_marker_1.WGMarker.name,
            wg_end_marker_1.WGEndMarker.name,
            wh_marker_1.WHMarker.name,
            wh_end_marker_1.WHEndMarker.name,
            wj_marker_1.WJMarker.name,
            wj_end_marker_1.WJEndMarker.name,
            fig_marker_1.FIGMarker.name,
            fig_end_marker_1.FIGEndMarker.name,
            pn_marker_1.PNMarker.name,
            pn_end_marker_1.PNEndMarker.name,
            pro_marker_1.PROMarker.name,
            pro_end_marker_1.PROEndMarker.name,
            rem_marker_1.REMMarker.name,
            p_marker_1.PMarker.name,
            li_marker_1.LIMarker.name,
        ];
    }
    tryInsert(input) {
        if (input.constructor.name === VMarker.name) {
            return false;
        }
        if (input.constructor.name === q_marker_1.QMarker.name &&
            input.isPoetryBlock) {
            return false;
        }
        return super.tryInsert(input);
    }
}
exports.VMarker = VMarker;
VMarker.verseRegex = /^ *([0-9]*-?[0-9]*) ?(.*)/;
