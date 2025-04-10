"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIGEndMarker = void 0;
const marker_1 = require("./marker");
class FIGEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "fig*";
    }
}
exports.FIGEndMarker = FIGEndMarker;
