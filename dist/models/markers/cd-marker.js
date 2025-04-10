"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
class CDMarker extends marker_1.Marker {
    getIdentifier() {
        return "cd";
    }
    preProcess(input) {
        this.description = input;
        return "";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.CDMarker = CDMarker;
