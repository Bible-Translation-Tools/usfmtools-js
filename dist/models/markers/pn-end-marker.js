"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNEndMarker = void 0;
const marker_1 = require("./marker");
class PNEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "pn*";
    }
}
exports.PNEndMarker = PNEndMarker;
