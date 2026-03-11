"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NDEndMarker = void 0;
const marker_1 = require("./marker");
class NDEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "nd*";
    }
}
exports.NDEndMarker = NDEndMarker;
