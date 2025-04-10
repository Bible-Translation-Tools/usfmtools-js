import { Marker } from "./marker";
import { TextBlock } from "./text-block";

/**
 * Wordlist / Glossary / Dictionary Entry Marker
 */
export class WMarker extends Marker {
  public term: string;
  /**
   * @var array{string, string}
   */
  public attributes: { [key: string]: string } = {};

  private static wordAttributePattern: RegExp =
    /([\p{L}-]+)=?"?([\p{L}\d,:.]*)"?/u;

  public getIdentifier(): string {
    return "w";
  }

  public preProcess(input: string): string {
    const trimmedInput = input.trim();

    const wordEntry = trimmedInput.split("|");
    this.term = wordEntry[0];

    if (wordEntry.length > 1) {
      const wordAttr = wordEntry[1].split(" ");
      for (const attr of wordAttr) {
        const matches = attr.match(WMarker.wordAttributePattern);
        if (matches && matches.length > 0) {
          if (matches[2].length === 0) {
            this.attributes["lemma"] = matches[1];
          } else {
            this.attributes[matches[1]] = matches[2];
          }
        }
      }
    }

    return "";
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
