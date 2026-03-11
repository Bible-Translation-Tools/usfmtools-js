"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QACEndMarker = void 0;
const marker_1 = require("./marker");
class QACEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "qac*";
    }
}
exports.QACEndMarker = QACEndMarker;
