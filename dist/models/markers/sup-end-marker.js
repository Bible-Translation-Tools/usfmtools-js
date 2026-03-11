"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPEndMarker = void 0;
const marker_1 = require("./marker");
class SUPEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "sup*";
    }
}
exports.SUPEndMarker = SUPEndMarker;
