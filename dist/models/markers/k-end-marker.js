"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEndMarker = void 0;
const marker_1 = require("./marker");
class KEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "k*";
    }
}
exports.KEndMarker = KEndMarker;
