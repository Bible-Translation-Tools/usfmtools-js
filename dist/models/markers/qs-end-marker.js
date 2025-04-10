"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSEndMarker = void 0;
const qs_marker_1 = require("./qs-marker");
class QSEndMarker extends qs_marker_1.QSMarker {
    getIdentifier() {
        return "qs*";
    }
}
exports.QSEndMarker = QSEndMarker;
