"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STSMarker = void 0;
const marker_1 = require("./marker");
class STSMarker extends marker_1.Marker {
    getIdentifier() {
        return "sts";
    }
    getRawValue() {
        return this.statusText || "";
    }
    preProcess(input) {
        this.statusText = input.trim();
        return "";
    }
    isValid() {
        return !marker_1.Marker.isNullOrWhiteSpace(this.statusText);
    }
}
exports.STSMarker = STSMarker;
