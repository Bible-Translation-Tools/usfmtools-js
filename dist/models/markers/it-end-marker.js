"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEndMarker = void 0;
const marker_1 = require("./marker");
class ITEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "it*";
    }
}
exports.ITEndMarker = ITEndMarker;
