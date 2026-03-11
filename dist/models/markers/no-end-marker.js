"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOEndMarker = void 0;
const marker_1 = require("./marker");
class NOEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "no*";
    }
}
exports.NOEndMarker = NOEndMarker;
