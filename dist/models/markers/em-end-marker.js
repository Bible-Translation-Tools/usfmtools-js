"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMEndMarker = void 0;
const marker_1 = require("./marker");
class EMEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "em*";
    }
}
exports.EMEndMarker = EMEndMarker;
