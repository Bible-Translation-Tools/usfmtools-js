"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAMarker = void 0;
const marker_1 = require("./marker");
const qac_marker_1 = require("./qac-marker");
const qac_end_marker_1 = require("./qac-end-marker");
/**
 * Acrostic heading for poetry
 */
class QAMarker extends marker_1.Marker {
    getIdentifier() {
        return "qa";
    }
    preProcess(input) {
        this.heading = input.trim();
        return "";
    }
    getAllowedContents() {
        return [qac_marker_1.QACMarker.name, qac_end_marker_1.QACEndMarker.name];
    }
}
exports.QAMarker = QAMarker;
