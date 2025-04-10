"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAEndMarker = void 0;
const marker_1 = require("./marker");
class CAEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "ca*";
    }
}
exports.CAEndMarker = CAEndMarker;
