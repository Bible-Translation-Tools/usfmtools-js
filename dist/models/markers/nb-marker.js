"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBMarker = void 0;
const marker_1 = require("./marker");
class NBMarker extends marker_1.Marker {
    getIdentifier() {
        return "nb";
    }
}
exports.NBMarker = NBMarker;
