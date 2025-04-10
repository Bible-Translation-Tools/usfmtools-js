"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPEndMarker = void 0;
const marker_1 = require("./marker");
class VPEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "vp*";
    }
}
exports.VPEndMarker = VPEndMarker;
