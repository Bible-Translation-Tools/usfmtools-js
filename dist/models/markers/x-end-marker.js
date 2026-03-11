"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XEndMarker = void 0;
const marker_1 = require("./marker");
class XEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "x*";
    }
}
exports.XEndMarker = XEndMarker;
