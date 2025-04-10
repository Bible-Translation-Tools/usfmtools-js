"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USFMParser = void 0;
const add_end_marker_1 = require("./models/markers/add-end-marker");
const add_marker_1 = require("./models/markers/add-marker");
const b_marker_1 = require("./models/markers/b-marker");
const bd_end_marker_1 = require("./models/markers/bd-end-marker");
const bd_marker_1 = require("./models/markers/bd-marker");
const bdit_end_marker_1 = require("./models/markers/bdit-end-marker");
const bdit_marker_1 = require("./models/markers/bdit-marker");
const bk_end_marker_1 = require("./models/markers/bk-end-marker");
const bk_marker_1 = require("./models/markers/bk-marker");
const c_marker_1 = require("./models/markers/c-marker");
const ca_end_marker_1 = require("./models/markers/ca-end-marker");
const ca_marker_1 = require("./models/markers/ca-marker");
const cl_marker_1 = require("./models/markers/cl-marker");
const cls_marker_1 = require("./models/markers/cls-marker");
const cp_marker_1 = require("./models/markers/cp-marker");
const d_marker_1 = require("./models/markers/d-marker");
const em_end_marker_1 = require("./models/markers/em-end-marker");
const em_marker_1 = require("./models/markers/em-marker");
const f_end_marker_1 = require("./models/markers/f-end-marker");
const f_marker_1 = require("./models/markers/f-marker");
const fig_end_marker_1 = require("./models/markers/fig-end-marker");
const fig_marker_1 = require("./models/markers/fig-marker");
const fk_marker_1 = require("./models/markers/fk-marker");
const fp_marker_1 = require("./models/markers/fp-marker");
const fq_end_marker_1 = require("./models/markers/fq-end-marker");
const fq_marker_1 = require("./models/markers/fq-marker");
const fqa_end_marker_1 = require("./models/markers/fqa-end-marker");
const fqa_marker_1 = require("./models/markers/fqa-marker");
const fr_end_marker_1 = require("./models/markers/fr-end-marker");
const fr_marker_1 = require("./models/markers/fr-marker");
const ft_marker_1 = require("./models/markers/ft-marker");
const fv_end_marker_1 = require("./models/markers/fv-end-marker");
const fv_marker_1 = require("./models/markers/fv-marker");
const h_marker_1 = require("./models/markers/h-marker");
const ib_marker_1 = require("./models/markers/ib-marker");
const id_marker_1 = require("./models/markers/id-marker");
const ide_marker_1 = require("./models/markers/ide-marker");
const ie_marker_1 = require("./models/markers/ie-marker");
const ili_marker_1 = require("./models/markers/ili-marker");
const im_marker_1 = require("./models/markers/im-marker");
const imi_marker_1 = require("./models/markers/imi-marker");
const imq_marker_1 = require("./models/markers/imq-marker");
const imt_marker_1 = require("./models/markers/imt-marker");
const io_marker_1 = require("./models/markers/io-marker");
const ior_end_marker_1 = require("./models/markers/ior-end-marker");
const ior_marker_1 = require("./models/markers/ior-marker");
const iot_marker_1 = require("./models/markers/iot-marker");
const ip_marker_1 = require("./models/markers/ip-marker");
const ipi_marker_1 = require("./models/markers/ipi-marker");
const ipq_marker_1 = require("./models/markers/ipq-marker");
const ipr_marker_1 = require("./models/markers/ipr-marker");
const iq_marker_1 = require("./models/markers/iq-marker");
const is_marker_1 = require("./models/markers/is-marker");
const it_end_marker_1 = require("./models/markers/it-end-marker");
const it_marker_1 = require("./models/markers/it-marker");
const k_end_marker_1 = require("./models/markers/k-end-marker");
const k_marker_1 = require("./models/markers/k-marker");
const lf_marker_1 = require("./models/markers/lf-marker");
const li_marker_1 = require("./models/markers/li-marker");
const lik_end_marker_1 = require("./models/markers/lik-end-marker");
const lik_marker_1 = require("./models/markers/lik-marker");
const litl_end_marker_1 = require("./models/markers/litl-end-marker");
const litl_marker_1 = require("./models/markers/litl-marker");
const liv_end_marker_1 = require("./models/markers/liv-end-marker");
const liv_marker_1 = require("./models/markers/liv-marker");
const m_marker_1 = require("./models/markers/m-marker");
const marker_1 = require("./models/markers/marker");
const mi_marker_1 = require("./models/markers/mi-marker");
const mr_marker_1 = require("./models/markers/mr-marker");
const ms_marker_1 = require("./models/markers/ms-marker");
const mt_marker_1 = require("./models/markers/mt-marker");
const nb_marker_1 = require("./models/markers/nb-marker");
const nd_end_marker_1 = require("./models/markers/nd-end-marker");
const nd_marker_1 = require("./models/markers/nd-marker");
const no_end_marker_1 = require("./models/markers/no-end-marker");
const no_marker_1 = require("./models/markers/no-marker");
const ord_end_marker_1 = require("./models/markers/ord-end-marker");
const ord_marker_1 = require("./models/markers/ord-marker");
const p_marker_1 = require("./models/markers/p-marker");
const pc_marker_1 = require("./models/markers/pc-marker");
const pi_marker_1 = require("./models/markers/pi-marker");
const pmc_marker_1 = require("./models/markers/pmc-marker");
const pmo_marker_1 = require("./models/markers/pmo-marker");
const pmr_marker_1 = require("./models/markers/pmr-marker");
const pn_end_marker_1 = require("./models/markers/pn-end-marker");
const pn_marker_1 = require("./models/markers/pn-marker");
const png_end_marker_1 = require("./models/markers/png-end-marker");
const png_marker_1 = require("./models/markers/png-marker");
const pr_marker_1 = require("./models/markers/pr-marker");
const pro_end_marker_1 = require("./models/markers/pro-end-marker");
const pro_marker_1 = require("./models/markers/pro-marker");
const q_marker_1 = require("./models/markers/q-marker");
const qa_marker_1 = require("./models/markers/qa-marker");
const qac_end_marker_1 = require("./models/markers/qac-end-marker");
const qac_marker_1 = require("./models/markers/qac-marker");
const qc_marker_1 = require("./models/markers/qc-marker");
const qd_marker_1 = require("./models/markers/qd-marker");
const qm_marker_1 = require("./models/markers/qm-marker");
const qr_marker_1 = require("./models/markers/qr-marker");
const qs_end_marker_1 = require("./models/markers/qs-end-marker");
const qs_marker_1 = require("./models/markers/qs-marker");
const qt_end_marker_1 = require("./models/markers/qt-end-marker");
const qt_marker_1 = require("./models/markers/qt-marker");
const r_marker_1 = require("./models/markers/r-marker");
const rb_end_marker_1 = require("./models/markers/rb-end-marker");
const rb_marker_1 = require("./models/markers/rb-marker");
const rem_marker_1 = require("./models/markers/rem-marker");
const rq_end_marker_1 = require("./models/markers/rq-end-marker");
const rq_marker_1 = require("./models/markers/rq-marker");
const s_marker_1 = require("./models/markers/s-marker");
const sc_end_marker_1 = require("./models/markers/sc-end-marker");
const sc_marker_1 = require("./models/markers/sc-marker");
const sig_end_marker_1 = require("./models/markers/sig-end-marker");
const sig_marker_1 = require("./models/markers/sig-marker");
const sls_end_marker_1 = require("./models/markers/sls-end-marker");
const sls_marker_1 = require("./models/markers/sls-marker");
const sp_marker_1 = require("./models/markers/sp-marker");
const sts_marker_1 = require("./models/markers/sts-marker");
const sup_end_marker_1 = require("./models/markers/sup-end-marker");
const sup_marker_1 = require("./models/markers/sup-marker");
const table_block_1 = require("./models/markers/table-block");
const tc_marker_1 = require("./models/markers/tc-marker");
const tcr_marker_1 = require("./models/markers/tcr-marker");
const text_block_1 = require("./models/markers/text-block");
const th_marker_1 = require("./models/markers/th-marker");
const thr_marker_1 = require("./models/markers/thr-marker");
const tl_end_marker_1 = require("./models/markers/tl-end-marker");
const tl_marker_1 = require("./models/markers/tl-marker");
const toc1_marker_1 = require("./models/markers/toc1-marker");
const toc2_marker_1 = require("./models/markers/toc2-marker");
const toc3_marker_1 = require("./models/markers/toc3-marker");
const toca1_marker_1 = require("./models/markers/toca1-marker");
const toca2_marker_1 = require("./models/markers/toca2-marker");
const toca3_marker_1 = require("./models/markers/toca3-marker");
const tr_marker_1 = require("./models/markers/tr-marker");
const unknown_marker_1 = require("./models/markers/unknown-marker");
const usfm_document_1 = require("./models/markers/usfm-document");
const usfm_marker_1 = require("./models/markers/usfm-marker");
const v_marker_1 = require("./models/markers/v-marker");
const va_end_marker_1 = require("./models/markers/va-end-marker");
const va_marker_1 = require("./models/markers/va-marker");
const vp_end_marker_1 = require("./models/markers/vp-end-marker");
const vp_marker_1 = require("./models/markers/vp-marker");
const w_end_marker_1 = require("./models/markers/w-end-marker");
const w_marker_1 = require("./models/markers/w-marker");
const wa_end_marker_1 = require("./models/markers/wa-end-marker");
const wa_marker_1 = require("./models/markers/wa-marker");
const wg_end_marker_1 = require("./models/markers/wg-end-marker");
const wg_marker_1 = require("./models/markers/wg-marker");
const wh_end_marker_1 = require("./models/markers/wh-end-marker");
const wh_marker_1 = require("./models/markers/wh-marker");
const wj_end_marker_1 = require("./models/markers/wj-end-marker");
const wj_marker_1 = require("./models/markers/wj-marker");
const x_end_marker_1 = require("./models/markers/x-end-marker");
const x_marker_1 = require("./models/markers/x-marker");
const xo_marker_1 = require("./models/markers/xo-marker");
const xq_marker_1 = require("./models/markers/xq-marker");
const xt_marker_1 = require("./models/markers/xt-marker");
class USFMParser {
    /**
     * @param ?string[] $tagsToIgnore
     * @param bool $ignoreUnknownMarkers
     */
    constructor(tagsToIgnore = null, ignoreUnknownMarkers = false) {
        /** @var array|string[] */
        this.ignoredTags = [];
        this.ignoreUnknownMarkers = false;
        this.ignoredTags = tagsToIgnore ?? [];
        this.ignoreUnknownMarkers = ignoreUnknownMarkers;
    }
    /**
     * Parses a string into a USFMDocument
     * @param string $input A USFM string
     * @return USFMDocument A USFMDocument representing the input
     */
    parseFromString(input) {
        const output = new usfm_document_1.USFMDocument();
        let markers = this.tokenizeFromString(input);
        // Clean out extra whitespace where it isn't needed
        markers = this.cleanWhitespace(markers);
        for (let markerIndex = 0; markerIndex < markers.length; markerIndex++) {
            const marker = markers[markerIndex];
            if (marker instanceof tr_marker_1.TRMarker &&
                !output.getTypesPathToLastMarker().includes(table_block_1.TableBlock)) {
                output.insert(new table_block_1.TableBlock());
            }
            if (marker instanceof q_marker_1.QMarker &&
                markerIndex !== markers.length - 1 &&
                markers[markerIndex + 1] instanceof v_marker_1.VMarker) {
                marker.isPoetryBlock = true;
                output.insert(marker);
            }
            else {
                output.insert(marker);
            }
        }
        return output;
    }
    /**
     * Removes all the unnecessary whitespace while preserving space between closing markers and opening markers
     * @param (Marker|USFMDocument)[] $input
     * @return (Marker|USFMDocument)[]
     */
    cleanWhitespace(input) {
        /** @var Marker[] $output */
        const output = [];
        for (let index = 0; index < input.length; index++) {
            const block = input[index];
            if (!(block instanceof text_block_1.TextBlock && !block.text.trim())) {
                output.push(block);
                continue;
            }
            // If this is an empty text block at the beginning remove it
            if (index === 0) {
                continue;
            }
            // If this is an empty text block at the end then remove it
            if (index === input.length - 1) {
                continue;
            }
            // If this isn't between and end marker and another marker then delete it
            const prev = input[index - 1];
            const next = input[index + 1];
            if (!(prev.getIdentifier().endsWith("*") &&
                !next.getIdentifier().endsWith("*"))) {
                continue;
            }
            output.push(input[index]);
        }
        return output;
    }
    /**
     * Generate a list of Markers from a string
     * @param string $input USFM String to tokenize
     * @return (Marker|USFMDocument)[] A List of Markers based upon the string
     */
    tokenizeFromString(input) {
        /** @var Marker[] $output */
        const output = [];
        const matches = Array.from(input.matchAll(USFMParser.splitRegex));
        for (const match of matches) {
            if (this.ignoredTags.includes(match[1])) {
                continue;
            }
            const result = this.convertToMarker(match[1], match[2]);
            const resultMarker = result.marker;
            if (resultMarker instanceof marker_1.Marker) {
                resultMarker.position = matches.indexOf(match);
            }
            // If this is an unknown marker, and we're in Ignore Unknown Marker mode then don't add the marker.
            // We still keep any remaining text though
            if (resultMarker instanceof unknown_marker_1.UnknownMarker) {
                if (this.ignoreUnknownMarkers) {
                    output.push(new text_block_1.TextBlock(resultMarker.parsedValue));
                }
                else {
                    output.push(resultMarker);
                }
            }
            else {
                output.push(resultMarker);
            }
            if (result.remainingText && result.remainingText.trim()) {
                output.push(new text_block_1.TextBlock(result.remainingText));
            }
        }
        return output;
    }
    /**
     * @param string $identifier
     * @param string $value
     * @return ConvertToMarkerResult
     */
    convertToMarker(identifier, value) {
        const output = this.selectMarker(identifier);
        const remainingText = output.preProcess(value);
        return { marker: output, remainingText };
    }
    /**
     * @param string $identifier
     * @return Marker
     */
    selectMarker(identifier) {
        switch (identifier) {
            case "id":
                return new id_marker_1.IDMarker();
            case "ide":
                return new ide_marker_1.IDEMarker();
            case "sts":
                return new sts_marker_1.STSMarker();
            case "h":
                return new h_marker_1.HMarker();
            case "toc1":
                return new toc1_marker_1.TOC1Marker();
            case "toc2":
                return new toc2_marker_1.TOC2Marker();
            case "toc3":
                return new toc3_marker_1.TOC3Marker();
            case "toca1":
                return new toca1_marker_1.TOCA1Marker();
            case "toca2":
                return new toca2_marker_1.TOCA2Marker();
            case "toca3":
                return new toca3_marker_1.TOCA3Marker();
            /* Introduction Markers*/
            case "imt":
            case "imt1":
                return new imt_marker_1.IMTMarker();
            case "imt2":
                const imt2Marker = new imt_marker_1.IMTMarker();
                imt2Marker.weight = 2;
                return imt2Marker;
            case "imt3":
                const imt3Marker = new imt_marker_1.IMTMarker();
                imt3Marker.weight = 3;
                return imt3Marker;
            case "is":
            case "is1":
                return new is_marker_1.ISMarker();
            case "is2":
                const is2Marker = new is_marker_1.ISMarker();
                is2Marker.weight = 2;
                return is2Marker;
            case "is3":
                const is3Marker = new is_marker_1.ISMarker();
                is3Marker.weight = 3;
                return is3Marker;
            case "ib":
                return new ib_marker_1.IBMarker();
            case "iq":
            case "iq1":
                return new iq_marker_1.IQMarker();
            case "iq2":
                const iq2Marker = new iq_marker_1.IQMarker();
                iq2Marker.depth = 2;
                return iq2Marker;
            case "iq3":
                const iq3Marker = new iq_marker_1.IQMarker();
                iq3Marker.depth = 3;
                return iq3Marker;
            case "iot":
                return new iot_marker_1.IOTMarker();
            case "io":
            case "io1":
                return new io_marker_1.IOMarker();
            case "io2":
                const io2Marker = new io_marker_1.IOMarker();
                io2Marker.depth = 2;
                return io2Marker;
            case "io3":
                const io3Marker = new io_marker_1.IOMarker();
                io3Marker.depth = 3;
                return io3Marker;
            case "ior":
                return new ior_marker_1.IORMarker();
            case "ior*":
                return new ior_end_marker_1.IOREndMarker();
            case "ili":
            case "ili1":
                return new ili_marker_1.ILIMarker();
            case "ili2":
                const ili2Marker = new ili_marker_1.ILIMarker();
                ili2Marker.depth = 2;
                return ili2Marker;
            case "ili3":
                const ili3Marker = new ili_marker_1.ILIMarker();
                ili3Marker.depth = 3;
                return ili3Marker;
            case "ip":
                return new ip_marker_1.IPMarker();
            case "ipi":
                return new ipi_marker_1.IPIMarker();
            case "im":
                return new im_marker_1.IMMarker();
            case "imi":
                return new imi_marker_1.IMIMarker();
            case "ipq":
                return new ipq_marker_1.IPQMarker();
            case "imq":
                return new imq_marker_1.IMQMarker();
            case "ipr":
                return new ipr_marker_1.IPRMarker();
            case "mt":
            case "mt1":
                return new mt_marker_1.MTMarker();
            case "mt2":
                const mt2Marker = new mt_marker_1.MTMarker();
                mt2Marker.weight = 2;
                return mt2Marker;
            case "mt3":
                const mt3Marker = new mt_marker_1.MTMarker();
                mt3Marker.weight = 3;
                return mt3Marker;
            case "c":
                return new c_marker_1.CMarker();
            case "cp":
                return new cp_marker_1.CPMarker();
            case "ca":
                return new ca_marker_1.CAMarker();
            case "ca*":
                return new ca_end_marker_1.CAEndMarker();
            case "p":
                return new p_marker_1.PMarker();
            case "v":
                return new v_marker_1.VMarker();
            case "va":
                return new va_marker_1.VAMarker();
            case "va*":
                return new va_end_marker_1.VAEndMarker();
            case "vp":
                return new vp_marker_1.VPMarker();
            case "vp*":
                return new vp_end_marker_1.VPEndMarker();
            case "q":
            case "q1":
                return new q_marker_1.QMarker();
            case "q2":
                const q2Marker = new q_marker_1.QMarker();
                q2Marker.depth = 2;
                return q2Marker;
            case "q3":
                const q3Marker = new q_marker_1.QMarker();
                q3Marker.depth = 3;
                return q3Marker;
            case "q4":
                const q4Marker = new q_marker_1.QMarker();
                q4Marker.depth = 4;
                return q4Marker;
            case "qr":
                return new qr_marker_1.QRMarker();
            case "qc":
                return new qc_marker_1.QCMarker();
            case "qd":
                return new qd_marker_1.QDMarker();
            case "qac":
                return new qac_marker_1.QACMarker();
            case "qac*":
                return new qac_end_marker_1.QACEndMarker();
            case "qm":
            case "qm1":
                return new qm_marker_1.QMMarker();
            case "qm2":
                const qm2Marker = new qm_marker_1.QMMarker();
                qm2Marker.depth = 2;
                return qm2Marker;
            case "qm3":
                const qm3Marker = new qm_marker_1.QMMarker();
                qm3Marker.depth = 3;
                return qm3Marker;
            case "m":
                return new m_marker_1.MMarker();
            case "d":
                return new d_marker_1.DMarker();
            case "ms":
            case "ms1":
                return new ms_marker_1.MSMarker();
            case "ms2":
                const ms2Marker = new ms_marker_1.MSMarker();
                ms2Marker.weight = 2;
                return ms2Marker;
            case "ms3":
                const ms3Marker = new ms_marker_1.MSMarker();
                ms3Marker.weight = 3;
                return ms3Marker;
            case "mr":
                return new mr_marker_1.MRMarker();
            case "cl":
                return new cl_marker_1.CLMarker();
            case "qs":
                return new qs_marker_1.QSMarker();
            case "qs*":
                return new qs_end_marker_1.QSEndMarker();
            case "f":
                return new f_marker_1.FMarker();
            case "fp":
                return new fp_marker_1.FPMarker();
            case "qa":
                return new qa_marker_1.QAMarker();
            case "nb":
                return new nb_marker_1.NBMarker();
            case "fqa":
                return new fqa_marker_1.FQAMarker();
            case "fqa*":
                return new fqa_end_marker_1.FQAEndMarker();
            case "fq":
                return new fq_marker_1.FQMarker();
            case "fq*":
                return new fq_end_marker_1.FQEndMarker();
            case "pi":
            case "pi1":
                return new pi_marker_1.PIMarker();
            case "pi2":
                const pi2Marker = new pi_marker_1.PIMarker();
                pi2Marker.depth = 2;
                return pi2Marker;
            case "pi3":
                const pi3Marker = new pi_marker_1.PIMarker();
                pi3Marker.depth = 3;
                return pi3Marker;
            case "sp":
                return new sp_marker_1.SPMarker();
            case "ft":
                return new ft_marker_1.FTMarker();
            case "fr":
                return new fr_marker_1.FRMarker();
            case "fr*":
                return new fr_end_marker_1.FREndMarker();
            case "fk":
                return new fk_marker_1.FKMarker();
            case "fv":
                return new fv_marker_1.FVMarker();
            case "fv*":
                return new fv_end_marker_1.FVEndMarker();
            case "f*":
                return new f_end_marker_1.FEndMarker();
            case "bd":
                return new bd_marker_1.BDMarker();
            case "bd*":
                return new bd_end_marker_1.BDEndMarker();
            case "it":
                return new it_marker_1.ITMarker();
            case "it*":
                return new it_end_marker_1.ITEndMarker();
            case "rem":
                return new rem_marker_1.REMMarker();
            case "b":
                return new b_marker_1.BMarker();
            case "s":
            case "s1":
                return new s_marker_1.SMarker();
            case "s2":
                const s2Marker = new s_marker_1.SMarker();
                s2Marker.weight = 2;
                return s2Marker;
            case "s3":
                const s3Marker = new s_marker_1.SMarker();
                s3Marker.weight = 3;
                return s3Marker;
            case "s4":
                const s4Marker = new s_marker_1.SMarker();
                s4Marker.weight = 4;
                return s4Marker;
            case "s5":
                const s5Marker = new s_marker_1.SMarker();
                s5Marker.weight = 5;
                return s5Marker;
            case "bk":
                return new bk_marker_1.BKMarker();
            case "bk*":
                return new bk_end_marker_1.BKEndMarker();
            case "li":
            case "li1":
                return new li_marker_1.LIMarker();
            case "li2":
                const li2Marker = new li_marker_1.LIMarker();
                li2Marker.depth = 2;
                return li2Marker;
            case "li3":
                const li3Marker = new li_marker_1.LIMarker();
                li3Marker.depth = 3;
                return li3Marker;
            case "add":
                return new add_marker_1.ADDMarker();
            case "add*":
                return new add_end_marker_1.ADDEndMarker();
            case "tl":
                return new tl_marker_1.TLMarker();
            case "tl*":
                return new tl_end_marker_1.TLEndMarker();
            case "mi":
                return new mi_marker_1.MIMarker();
            case "sc":
                return new sc_marker_1.SCMarker();
            case "sc*":
                return new sc_end_marker_1.SCEndMarker();
            case "r":
                return new r_marker_1.RMarker();
            case "rq":
                return new rq_marker_1.RQMarker();
            case "rq*":
                return new rq_end_marker_1.RQEndMarker();
            case "w":
                return new w_marker_1.WMarker();
            case "w*":
                return new w_end_marker_1.WEndMarker();
            case "x":
                return new x_marker_1.XMarker();
            case "x*":
                return new x_end_marker_1.XEndMarker();
            case "xo":
                return new xo_marker_1.XOMarker();
            case "xt":
                return new xt_marker_1.XTMarker();
            case "xq":
                return new xq_marker_1.XQMarker();
            case "pc":
                return new pc_marker_1.PCMarker();
            case "cls":
                return new cls_marker_1.CLSMarker();
            case "tr":
                return new tr_marker_1.TRMarker();
            case "th1":
                return new th_marker_1.THMarker();
            case "thr1":
                return new thr_marker_1.THRMarker();
            case "th2":
                const th2Marker = new th_marker_1.THMarker();
                th2Marker.columnPosition = 2;
                return th2Marker;
            case "thr2":
                const thr2Marker = new thr_marker_1.THRMarker();
                thr2Marker.columnPosition = 2;
                return thr2Marker;
            case "th3":
                const th3Marker = new th_marker_1.THMarker();
                th3Marker.columnPosition = 3;
                return th3Marker;
            case "thr3":
                const thr3Marker = new thr_marker_1.THRMarker();
                thr3Marker.columnPosition = 3;
                return thr3Marker;
            case "tc1":
                return new tc_marker_1.TCMarker();
            case "tcr1":
                return new tcr_marker_1.TCRMarker();
            case "tc2":
                const tc2Marker = new tc_marker_1.TCMarker();
                tc2Marker.columnPosition = 2;
                return tc2Marker;
            case "tcr2":
                const tcr2Marker = new tcr_marker_1.TCRMarker();
                tcr2Marker.columnPosition = 2;
                return tcr2Marker;
            case "tc3":
                const tc3Marker = new tc_marker_1.TCMarker();
                tc3Marker.columnPosition = 3;
                return tc3Marker;
            case "tcr3":
                const tcr3Marker = new tcr_marker_1.TCRMarker();
                tcr3Marker.columnPosition = 3;
                return tcr3Marker;
            case "usfm":
                return new usfm_marker_1.USFMMarker();
            /* Character Styles */
            case "em":
                return new em_marker_1.EMMarker();
            case "em*":
                return new em_end_marker_1.EMEndMarker();
            case "bdit":
                return new bdit_marker_1.BDITMarker();
            case "bdit*":
                return new bdit_end_marker_1.BDITEndMarker();
            case "no":
                return new no_marker_1.NOMarker();
            case "no*":
                return new no_end_marker_1.NOEndMarker();
            case "k":
                return new k_marker_1.KMarker();
            case "k*":
                return new k_end_marker_1.KEndMarker();
            case "lf":
                return new lf_marker_1.LFMarker();
            case "lik":
                return new lik_marker_1.LIKMarker();
            case "lik*":
                return new lik_end_marker_1.LIKEndMarker();
            case "litl":
                return new litl_marker_1.LITLMarker();
            case "litl*":
                return new litl_end_marker_1.LITLEndMarker();
            case "liv":
                return new liv_marker_1.LIVMarker();
            case "liv*":
                return new liv_end_marker_1.LIVEndMarker();
            case "ord":
                return new ord_marker_1.ORDMarker();
            case "ord*":
                return new ord_end_marker_1.ORDEndMarker();
            case "pmc":
                return new pmc_marker_1.PMCMarker();
            case "pmo":
                return new pmo_marker_1.PMOMarker();
            case "pmr":
                return new pmr_marker_1.PMRMarker();
            case "png":
                return new png_marker_1.PNGMarker();
            case "png*":
                return new png_end_marker_1.PNGEndMarker();
            case "pr":
                return new pr_marker_1.PRMarker();
            case "qt":
                return new qt_marker_1.QTMarker();
            case "qt*":
                return new qt_end_marker_1.QTEndMarker();
            case "rb":
                return new rb_marker_1.RBMarker();
            case "rb*":
                return new rb_end_marker_1.RBEndMarker();
            case "sig":
                return new sig_marker_1.SIGMarker();
            case "sig*":
                return new sig_end_marker_1.SIGEndMarker();
            case "sls":
                return new sls_marker_1.SLSMarker();
            case "sls*":
                return new sls_end_marker_1.SLSEndMarker();
            case "wa":
                return new wa_marker_1.WAMarker();
            case "wa*":
                return new wa_end_marker_1.WAEndMarker();
            case "wg":
                return new wg_marker_1.WGMarker();
            case "wg*":
                return new wg_end_marker_1.WGEndMarker();
            case "wh":
                return new wh_marker_1.WHMarker();
            case "wh*":
                return new wh_end_marker_1.WHEndMarker();
            case "wj":
                return new wj_marker_1.WJMarker();
            case "wj*":
                return new wj_end_marker_1.WJEndMarker();
            case "nd":
                return new nd_marker_1.NDMarker();
            case "nd*":
                return new nd_end_marker_1.NDEndMarker();
            case "sup":
                return new sup_marker_1.SUPMarker();
            case "sup*":
                return new sup_end_marker_1.SUPEndMarker();
            case "ie":
                return new ie_marker_1.IEMarker();
            case "pn":
                return new pn_marker_1.PNMarker();
            case "pn*":
                return new pn_end_marker_1.PNEndMarker();
            case "pro":
                return new pro_marker_1.PROMarker();
            case "pro*":
                return new pro_end_marker_1.PROEndMarker();
            /* Special Features */
            case "fig":
                return new fig_marker_1.FIGMarker();
            case "fig*":
                return new fig_end_marker_1.FIGEndMarker();
            default:
                const unknownMarker = new unknown_marker_1.UnknownMarker();
                unknownMarker.parsedIdentifier = identifier;
                return unknownMarker;
        }
    }
}
exports.USFMParser = USFMParser;
USFMParser.splitRegex = /\\([a-z0-9-]*\**)([^\\]*)/g;
