"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FQAEndMarker = void 0;
const marker_1 = require("./marker");
class FQAEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "fqa*";
    }
}
exports.FQAEndMarker = FQAEndMarker;
