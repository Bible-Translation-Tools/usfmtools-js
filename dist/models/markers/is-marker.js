"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISMarker = void 0;
const marker_1 = require("./marker");
class ISMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "is";
    }
    getRawValue() {
        return this.heading || "";
    }
    preProcess(input) {
        this.heading = input.trim();
        return "";
    }
}
exports.ISMarker = ISMarker;
