"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMMarker = void 0;
const marker_1 = require("./marker");
class REMMarker extends marker_1.Marker {
    getIdentifier() {
        return "rem";
    }
    preProcess(input) {
        this.comment = input.trim();
        return "";
    }
}
exports.REMMarker = REMMarker;
