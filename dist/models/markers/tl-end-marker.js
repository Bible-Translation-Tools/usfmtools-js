"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLEndMarker = void 0;
const marker_1 = require("./marker");
class TLEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "tl*";
    }
}
exports.TLEndMarker = TLEndMarker;
