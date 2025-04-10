"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLSEndMarker = void 0;
const marker_1 = require("./marker");
class SLSEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "sls*";
    }
}
exports.SLSEndMarker = SLSEndMarker;
