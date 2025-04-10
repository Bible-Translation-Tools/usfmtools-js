"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIKEndMarker = void 0;
const marker_1 = require("./marker");
class LIKEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "lik*";
    }
}
exports.LIKEndMarker = LIKEndMarker;
