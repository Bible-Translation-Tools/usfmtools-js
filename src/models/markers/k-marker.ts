import { Marker } from "./marker";
import { TextBlock } from "./text-block";

/**
 * Normal Text
 */
export class KMarker extends Marker {
  public getIdentifier(): string {
    return "k";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
