"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBMarker = void 0;
const marker_1 = require("./marker");
class IBMarker extends marker_1.Marker {
    getIdentifier() {
        return "ib";
    }
}
exports.IBMarker = IBMarker;
