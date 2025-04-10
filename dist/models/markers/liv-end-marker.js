"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIVEndMarker = void 0;
const marker_1 = require("./marker");
class LIVEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "liv*";
    }
}
exports.LIVEndMarker = LIVEndMarker;
