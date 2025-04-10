"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGEndMarker = void 0;
const marker_1 = require("./marker");
class SIGEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "sig*";
    }
}
exports.SIGEndMarker = SIGEndMarker;
