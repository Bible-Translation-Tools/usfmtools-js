"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDMarker = void 0;
const marker_1 = require("./marker");
class IDMarker extends marker_1.Marker {
    getIdentifier() {
        return "id";
    }
    getRawValue() {
        return this.textIdentifier || "";
    }
    preProcess(input) {
        this.textIdentifier = input.trim();
        return "";
    }
    isValid() {
        return !marker_1.Marker.isNullOrWhiteSpace(this.textIdentifier);
    }
}
exports.IDMarker = IDMarker;
