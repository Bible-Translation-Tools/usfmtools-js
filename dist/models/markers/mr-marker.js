"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MRMarker = void 0;
const marker_1 = require("./marker");
const f_marker_1 = require("./f-marker");
const f_end_marker_1 = require("./f-end-marker");
/**
 * Major section reference marker
 */
class MRMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "mr";
    }
    preProcess(input) {
        this.sectionReference = input.trimStart();
        return "";
    }
    getAllowedContents() {
        return [f_marker_1.FMarker.name, f_end_marker_1.FEndMarker.name];
    }
}
exports.MRMarker = MRMarker;
