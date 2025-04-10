"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDEndMarker = void 0;
const marker_1 = require("./marker");
class ORDEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "ord*";
    }
}
exports.ORDEndMarker = ORDEndMarker;
