import { Marker } from "./models/markers/marker";
import { TextBlock } from "./models/markers/text-block";
import { WMarker } from "./models/markers/w-marker";
import { WEndMarker } from "./models/markers/w-end-marker";

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
export class USFMRenderer {
  private readonly excludeMarkers: Set<string>;
  private readonly unwrapWordEntries: boolean;

  public constructor(config: USFMRendererConfig = {}) {
    this.excludeMarkers = new Set(config.excludeMarkers ?? []);
    this.unwrapWordEntries = config.unwrapWordEntries ?? false;
  }

  public render(input: Marker): string {
    if (this.excludeMarkers.has(input.getIdentifier())) {
      return "";
    }

    if (input instanceof TextBlock) {
      return input.text;
    }

    if (this.unwrapWordEntries && input instanceof WEndMarker) {
      return "";
    }

    let result: string;
    if (this.unwrapWordEntries && input instanceof WMarker) {
      result = input.term || "";
    } else {
      result = this.renderOwnMarkup(input);
    }

    let prevChild: Marker | null = input;
    for (const child of input.contents) {
      const childContent = this.render(child);
      if (childContent.length > 0) {
        if (
          this.needsSpaceBetween(prevChild, child) &&
          result.length > 0 &&
          !result.endsWith(" ") &&
          !childContent.startsWith(" ")
        ) {
          result += " ";
        }
        result += childContent;
      }
      prevChild = child;
    }

    return result;
  }

  private renderOwnMarkup(input: Marker): string {
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
  private needsSpaceBetween(prev: Marker, next: Marker): boolean {
    if (next.getIdentifier().endsWith("*")) {
      return false;
    }
    if (prev instanceof TextBlock) {
      return false;
    }
    if (next instanceof TextBlock) {
      return !USFMRenderer.isInlineText(prev);
    }
    return true;
  }

  private static isInlineText(marker: Marker): boolean {
    return (
      marker instanceof TextBlock ||
      marker instanceof WMarker ||
      marker instanceof WEndMarker
    );
  }
}
