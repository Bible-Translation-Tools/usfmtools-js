"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDMarker = void 0;
const marker_1 = require("./marker");
class IDMarker extends marker_1.Marker {
    getIdentifier() {
        return "id";
    }
    preProcess(input) {
        this.textIdentifier = input.trim();
        return "";
    }
}
exports.IDMarker = IDMarker;
