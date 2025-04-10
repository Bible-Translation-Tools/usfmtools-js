"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WGEndMarker = void 0;
const marker_1 = require("./marker");
class WGEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "wg*";
    }
}
exports.WGEndMarker = WGEndMarker;
