"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownMarker = void 0;
const marker_1 = require("./marker");
class UnknownMarker extends marker_1.Marker {
    getIdentifier() {
        return "";
    }
    preProcess(input) {
        this.parsedValue = input;
        return "";
    }
}
exports.UnknownMarker = UnknownMarker;
