"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RQEndMarker = void 0;
const marker_1 = require("./marker");
class RQEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "rq*";
    }
}
exports.RQEndMarker = RQEndMarker;
