import { Marker } from "./marker";
import { TextBlock } from "./text-block";

/**
 * A quotation from the scripture text
 */
export class XQMarker extends Marker {
  public getIdentifier(): string {
    return "xq";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
