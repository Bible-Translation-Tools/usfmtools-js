"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTEndMarker = void 0;
const marker_1 = require("./marker");
class QTEndMarker extends marker_1.Marker {
    getIdentifier() {
        return "qt*";
    }
}
exports.QTEndMarker = QTEndMarker;
