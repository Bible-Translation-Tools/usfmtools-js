"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPMarker = void 0;
const marker_1 = require("./marker");
const text_block_1 = require("./text-block");
/**
 * A speaker Marker (Used mostly in Job and Songs of Solomon)
 */
class SPMarker extends marker_1.Marker {
    getIdentifier() {
        return "sp";
    }
    preProcess(input) {
        this.speaker = input.trim();
        return "";
    }
    getAllowedContents() {
        return [text_block_1.TextBlock.name];
    }
}
exports.SPMarker = SPMarker;
