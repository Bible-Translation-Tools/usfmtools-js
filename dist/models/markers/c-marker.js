"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMarker = void 0;
const b_marker_1 = require("./b-marker");
const ca_end_marker_1 = require("./ca-end-marker");
const ca_marker_1 = require("./ca-marker");
const cd_marker_1 = require("./cd-marker");
const cl_marker_1 = require("./cl-marker");
const cp_marker_1 = require("./cp-marker");
const d_marker_1 = require("./d-marker");
const f_end_marker_1 = require("./f-end-marker");
const f_marker_1 = require("./f-marker");
const li_marker_1 = require("./li-marker");
const m_marker_1 = require("./m-marker");
const marker_1 = require("./marker");
const mi_marker_1 = require("./mi-marker");
const ms_marker_1 = require("./ms-marker");
const nb_marker_1 = require("./nb-marker");
const p_marker_1 = require("./p-marker");
const pc_marker_1 = require("./pc-marker");
const pi_marker_1 = require("./pi-marker");
const q_marker_1 = require("./q-marker");
const qa_marker_1 = require("./qa-marker");
const qs_end_marker_1 = require("./qs-end-marker");
const qs_marker_1 = require("./qs-marker");
const r_marker_1 = require("./r-marker");
const rem_marker_1 = require("./rem-marker");
const s_marker_1 = require("./s-marker");
const sp_marker_1 = require("./sp-marker");
const table_block_1 = require("./table-block");
const text_block_1 = require("./text-block");
const v_marker_1 = require("./v-marker");
const va_end_marker_1 = require("./va-end-marker");
const va_marker_1 = require("./va-marker");
class CMarker extends marker_1.Marker {
    getIdentifier() {
        return "c";
    }
    preProcess(input) {
        const matches = input.match(CMarker.regex);
        if (matches && matches.length > 0) {
            if (marker_1.Marker.isNullOrWhiteSpace(matches[1])) {
                this.number = 0;
            }
            else {
                this.number = parseInt(matches[1], 10);
            }
            if (marker_1.Marker.isNullOrWhiteSpace(matches[2])) {
                return "";
            }
            return matches[2].trimEnd();
        }
        return "";
    }
    getAllowedContents() {
        return [
            m_marker_1.MMarker,
            ms_marker_1.MSMarker,
            s_marker_1.SMarker,
            b_marker_1.BMarker,
            d_marker_1.DMarker,
            v_marker_1.VMarker,
            p_marker_1.PMarker,
            pc_marker_1.PCMarker,
            cd_marker_1.CDMarker,
            cp_marker_1.CPMarker,
            cl_marker_1.CLMarker,
            q_marker_1.QMarker,
            qs_marker_1.QSMarker,
            qs_end_marker_1.QSEndMarker,
            qa_marker_1.QAMarker,
            nb_marker_1.NBMarker,
            r_marker_1.RMarker,
            li_marker_1.LIMarker,
            table_block_1.TableBlock,
            mi_marker_1.MIMarker,
            pi_marker_1.PIMarker,
            ca_marker_1.CAMarker,
            ca_end_marker_1.CAEndMarker,
            sp_marker_1.SPMarker,
            text_block_1.TextBlock,
            rem_marker_1.REMMarker,
            va_marker_1.VAMarker,
            va_end_marker_1.VAEndMarker,
            f_marker_1.FMarker,
            f_end_marker_1.FEndMarker,
        ];
    }
    getPublishedChapterMarker() {
        const childCharacterMarkers = this.getChildMarkers(cp_marker_1.CPMarker);
        if (childCharacterMarkers.length > 0) {
            const marker = childCharacterMarkers[0];
            return marker.publishedChapterMarker;
        }
        else {
            return String(this.number);
        }
    }
    customChapterLabel() {
        const childChapLabelMarker = this.getChildMarkers(cl_marker_1.CLMarker);
        if (childChapLabelMarker.length > 0) {
            const marker = childChapLabelMarker[0];
            return marker.label;
        }
        else {
            return this.getPublishedChapterMarker();
        }
    }
}
exports.CMarker = CMarker;
CMarker.regex = / *(\d*) *(.*)/;
