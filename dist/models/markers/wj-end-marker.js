"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WJEndMarker = void 0;
const marker_1 = require("./marker");
class WJEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "wj*";
    }
}
exports.WJEndMarker = WJEndMarker;
