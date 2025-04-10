"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAEndMarker = void 0;
const marker_1 = require("./marker");
class VAEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "va*";
    }
}
exports.VAEndMarker = VAEndMarker;
