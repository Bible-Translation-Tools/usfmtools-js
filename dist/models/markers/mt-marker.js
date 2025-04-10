"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTMarker = void 0;
const marker_1 = require("./marker");
class MTMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "mt";
    }
    preProcess(input) {
        this.title = input.trim();
        return "";
    }
}
exports.MTMarker = MTMarker;
