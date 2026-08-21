import { Marker } from "./models/markers/marker";
export interface USFMRendererConfig {
    /**
     * Marker identifiers to omit from the output entirely, including their
     * values and children (e.g. ["s"] drops section headings).
     */
    excludeMarkers?: string[];
    /**
     * When true, word entry markers (\w term|attributes \w*) are rendered as
     * the bare term, dropping the markup and attributes (strong, x-morph, etc.).
     * Defaults to false, which renders them back to USFM as-is.
     */
    unwrapWordEntries?: boolean;
}
/**
 * Renders a USFMDocument (or any marker subtree) back to USFM.
 *
 * Unlike Marker.getRawContents(), the output spacing follows the original
 * text: TextBlocks are emitted verbatim and end markers attach directly to
 * the content they close. A space is only forced between markers whose
 * boundary carries no original spacing information.
 */
export declare class USFMRenderer {
    private readonly excludeMarkers;
    private readonly unwrapWordEntries;
    constructor(config?: USFMRendererConfig);
    render(input: Marker): string;
    private renderOwnMarkup;
    /**
     * TextBlocks carry the original spacing verbatim, so at a boundary between
     * a TextBlock and inline word content the original text is authoritative.
     * End markers always attach directly to the content they close. Everything
     * else (marker-to-marker boundaries, a marker's own value followed by its
     * first child, and word entries whose separating whitespace was consumed
     * by the parser) gets a space restored.
     */
    private needsSpaceBetween;
    private static isInlineText;
}
