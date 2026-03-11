"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBEndMarker = void 0;
const marker_1 = require("./marker");
class RBEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "rb*";
    }
}
exports.RBEndMarker = RBEndMarker;
