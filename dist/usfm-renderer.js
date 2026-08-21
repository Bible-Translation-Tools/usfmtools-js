"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USFMRenderer = void 0;
const text_block_1 = require("./models/markers/text-block");
const w_marker_1 = require("./models/markers/w-marker");
const w_end_marker_1 = require("./models/markers/w-end-marker");
/**
 * Renders a USFMDocument (or any marker subtree) back to USFM.
 *
 * Unlike Marker.getRawContents(), the output spacing follows the original
 * text: TextBlocks are emitted verbatim and end markers attach directly to
 * the content they close. A space is only forced between markers whose
 * boundary carries no original spacing information.
 */
class USFMRenderer {
    constructor(config = {}) {
        this.excludeMarkers = new Set(config.excludeMarkers ?? []);
        this.unwrapWordEntries = config.unwrapWordEntries ?? false;
    }
    render(input) {
        if (this.excludeMarkers.has(input.getIdentifier())) {
            return "";
        }
        if (input instanceof text_block_1.TextBlock) {
            return input.text;
        }
        if (this.unwrapWordEntries && input instanceof w_end_marker_1.WEndMarker) {
            return "";
        }
        let result;
        if (this.unwrapWordEntries && input instanceof w_marker_1.WMarker) {
            result = input.term || "";
        }
        else {
            result = this.renderOwnMarkup(input);
        }
        let prevChild = input;
        for (const child of input.contents) {
            const childContent = this.render(child);
            if (childContent.length > 0) {
                if (this.needsSpaceBetween(prevChild, child) &&
                    result.length > 0 &&
                    !result.endsWith(" ") &&
                    !childContent.startsWith(" ")) {
                    result += " ";
                }
                result += childContent;
            }
            prevChild = child;
        }
        return result;
    }
    renderOwnMarkup(input) {
        let result = "";
        const identifier = input.getIdentifier();
        if (identifier) {
            result = "\\" + identifier;
        }
        const rawValue = input.getRawValue();
        if (rawValue) {
            result += " " + rawValue;
        }
        return result;
    }
    /**
     * TextBlocks carry the original spacing verbatim, so at a boundary between
     * a TextBlock and inline word content the original text is authoritative.
     * End markers always attach directly to the content they close. Everything
     * else (marker-to-marker boundaries, a marker's own value followed by its
     * first child, and word entries whose separating whitespace was consumed
     * by the parser) gets a space restored.
     */
    needsSpaceBetween(prev, next) {
        if (next.getIdentifier().endsWith("*")) {
            return false;
        }
        if (prev instanceof text_block_1.TextBlock) {
            return false;
        }
        if (next instanceof text_block_1.TextBlock) {
            return !USFMRenderer.isInlineText(prev);
        }
        return true;
    }
    static isInlineText(marker) {
        return (marker instanceof text_block_1.TextBlock ||
            marker instanceof w_marker_1.WMarker ||
            marker instanceof w_end_marker_1.WEndMarker);
    }
}
exports.USFMRenderer = USFMRenderer;
