"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FREndMarker = void 0;
const marker_1 = require("./marker");
class FREndMarker extends marker_1.Marker {
    getIdentifier() {
        return "fr*";
    }
}
exports.FREndMarker = FREndMarker;
