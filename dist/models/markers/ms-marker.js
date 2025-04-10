"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSMarker = void 0;
const marker_1 = require("./marker");
const mr_marker_1 = require("./mr-marker");
class MSMarker extends marker_1.Marker {
    constructor() {
        super(...arguments);
        this.weight = 1;
    }
    getIdentifier() {
        return "ms";
    }
    preProcess(input) {
        this.heading = input.trimStart();
        return "";
    }
    getAllowedContents() {
        return [mr_marker_1.MRMarker];
    }
}
exports.MSMarker = MSMarker;
