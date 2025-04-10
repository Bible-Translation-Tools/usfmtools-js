"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FVEndMarker = void 0;
const marker_1 = require("./marker");
class FVEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "fv*";
    }
}
exports.FVEndMarker = FVEndMarker;
