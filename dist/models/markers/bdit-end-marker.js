"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BDITEndMarker = void 0;
const marker_1 = require("./marker");
class BDITEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "bdit*";
    }
}
exports.BDITEndMarker = BDITEndMarker;
