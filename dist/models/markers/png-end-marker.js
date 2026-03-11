"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNGEndMarker = void 0;
const marker_1 = require("./marker");
class PNGEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "png*";
    }
}
exports.PNGEndMarker = PNGEndMarker;
