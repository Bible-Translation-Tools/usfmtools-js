"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDEMarker = void 0;
const marker_1 = require("./marker");
class IDEMarker extends marker_1.Marker {
    getIdentifier() {
        return "ide";
    }
    preProcess(input) {
        this.encoding = input.trim();
        return "";
    }
}
exports.IDEMarker = IDEMarker;
