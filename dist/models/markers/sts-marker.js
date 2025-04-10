"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STSMarker = void 0;
const marker_1 = require("./marker");
class STSMarker extends marker_1.Marker {
    getIdentifier() {
        return "sts";
    }
    preProcess(input) {
        this.statusText = input.trim();
        return "";
    }
}
exports.STSMarker = STSMarker;
