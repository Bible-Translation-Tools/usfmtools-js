"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LITLEndMarker = void 0;
const marker_1 = require("./marker");
class LITLEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "litl*";
    }
}
exports.LITLEndMarker = LITLEndMarker;
