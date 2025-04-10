"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QACMarker = void 0;
const marker_1 = require("./marker");
class QACMarker extends marker_1.Marker {
    getIdentifier() {
        return "qac";
    }
    preProcess(input) {
        this.acrosticLetter = input.trim();
        return "";
    }
}
exports.QACMarker = QACMarker;
