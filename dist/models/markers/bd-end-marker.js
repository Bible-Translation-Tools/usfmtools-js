"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BDEndMarker = void 0;
const marker_1 = require("./marker");
class BDEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "bd*";
    }
}
exports.BDEndMarker = BDEndMarker;
