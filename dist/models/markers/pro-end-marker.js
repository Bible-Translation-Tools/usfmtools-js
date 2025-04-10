"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROEndMarker = void 0;
const marker_1 = require("./marker");
class PROEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "pro*";
    }
}
exports.PROEndMarker = PROEndMarker;
