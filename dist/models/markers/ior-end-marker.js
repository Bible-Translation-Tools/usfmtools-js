"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOREndMarker = void 0;
const marker_1 = require("./marker");
class IOREndMarker extends marker_1.Marker {
    getIdentifier() {
        return "ior*";
    }
}
exports.IOREndMarker = IOREndMarker;
