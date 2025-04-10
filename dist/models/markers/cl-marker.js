"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLMarker = void 0;
const marker_1 = require("./marker");
class CLMarker extends marker_1.Marker {
    getIdentifier() {
        return "cl";
    }
    preProcess(input) {
        this.label = input.trim();
        return "";
    }
}
exports.CLMarker = CLMarker;
