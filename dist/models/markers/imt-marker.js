"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMTMarker = void 0;
const marker_1 = require("./marker");
class IMTMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "imt";
    }
    preProcess(input) {
        this.introTitle = input.trim();
        return "";
    }
}
exports.IMTMarker = IMTMarker;
