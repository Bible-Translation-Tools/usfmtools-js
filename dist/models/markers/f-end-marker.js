"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEndMarker = void 0;
const marker_1 = require("./marker");
class FEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "f*";
    }
}
exports.FEndMarker = FEndMarker;
