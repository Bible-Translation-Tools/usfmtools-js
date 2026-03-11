"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FQEndMarker = void 0;
const marker_1 = require("./marker");
class FQEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "fq*";
    }
}
exports.FQEndMarker = FQEndMarker;
