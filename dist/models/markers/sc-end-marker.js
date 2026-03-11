"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCEndMarker = void 0;
const marker_1 = require("./marker");
class SCEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "sc*";
    }
}
exports.SCEndMarker = SCEndMarker;
