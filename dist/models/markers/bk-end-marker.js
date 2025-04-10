"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BKEndMarker = void 0;
const marker_1 = require("./marker");
class BKEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "bk*";
    }
}
exports.BKEndMarker = BKEndMarker;
