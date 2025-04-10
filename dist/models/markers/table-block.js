"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBlock = void 0;
const marker_1 = require("./marker");
const tr_marker_1 = require("./tr-marker");
class TableBlock extends marker_1.Marker {
    getIdentifier() {
        return "";
    }
    getAllowedContents() {
        return [tr_marker_1.TRMarker];
    }
}
exports.TableBlock = TableBlock;
