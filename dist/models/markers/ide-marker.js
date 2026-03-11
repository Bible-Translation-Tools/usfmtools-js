"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDEMarker = void 0;
const marker_1 = require("./marker");
class IDEMarker extends marker_1.Marker {
    getIdentifier() {
        return "ide";
    }
    getRawValue() {
        return this.encoding || "";
    }
    preProcess(input) {
        this.encoding = input.trim();
        return "";
    }
    isValid() {
        return !marker_1.Marker.isNullOrWhiteSpace(this.encoding);
    }
}
exports.IDEMarker = IDEMarker;
