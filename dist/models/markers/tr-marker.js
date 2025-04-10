"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRMarker = void 0;
const marker_1 = require("./marker");
const tc_marker_1 = require("./tc-marker");
const tcr_marker_1 = require("./tcr-marker");
const th_marker_1 = require("./th-marker");
const thr_marker_1 = require("./thr-marker");
class TRMarker extends marker_1.Marker {
    getIdentifier() {
        return "tr";
    }
    getAllowedContents() {
        return [tc_marker_1.TCMarker.name, th_marker_1.THMarker.name, tcr_marker_1.TCRMarker.name, thr_marker_1.THRMarker.name];
    }
}
exports.TRMarker = TRMarker;
