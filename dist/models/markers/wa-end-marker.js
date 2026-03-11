"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WAEndMarker = void 0;
const marker_1 = require("./marker");
class WAEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "wa*";
    }
}
exports.WAEndMarker = WAEndMarker;
