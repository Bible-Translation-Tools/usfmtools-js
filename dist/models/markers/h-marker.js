"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HMarker = void 0;
const marker_1 = require("./marker");
class HMarker extends marker_1.Marker {
    getIdentifier() {
        return "h";
    }
    preProcess(input) {
        this.headerText = input.trim();
        return "";
    }
}
exports.HMarker = HMarker;
