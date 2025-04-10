"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBlock = void 0;
const marker_1 = require("./marker");
class TextBlock extends marker_1.Marker {
    constructor(text) {
        super();
        this.text = text;
    }
    getIdentifier() {
        return "";
    }
}
exports.TextBlock = TextBlock;
