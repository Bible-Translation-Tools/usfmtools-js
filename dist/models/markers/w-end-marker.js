"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEndMarker = void 0;
const marker_1 = require("./marker");
class WEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "w*";
    }
}
exports.WEndMarker = WEndMarker;
