"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEMarker = void 0;
const marker_1 = require("./marker");
class IEMarker extends marker_1.Marker {
    getIdentifier() {
        return "ie";
    }
}
exports.IEMarker = IEMarker;
