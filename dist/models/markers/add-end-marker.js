"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDEndMarker = void 0;
const marker_1 = require("./marker");
class ADDEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "add*";
    }
}
exports.ADDEndMarker = ADDEndMarker;
