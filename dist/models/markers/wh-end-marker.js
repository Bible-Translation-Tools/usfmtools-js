"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WHEndMarker = void 0;
const marker_1 = require("./marker");
class WHEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "wh*";
    }
}
exports.WHEndMarker = WHEndMarker;
