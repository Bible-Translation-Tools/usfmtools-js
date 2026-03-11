"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOTMarker = void 0;
const marker_1 = require("./marker");
class IOTMarker extends marker_1.Marker {
    getIdentifier() {
        return "iot";
    }
    getRawValue() {
        return this.title || "";
    }
    preProcess(input) {
        this.title = input.trim();
        return "";
    }
}
exports.IOTMarker = IOTMarker;
