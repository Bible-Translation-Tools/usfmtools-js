import { Marker } from "./marker";
import { TextBlock } from "./text-block";

/**
 * A speaker Marker (Used mostly in Job and Songs of Solomon)
 */
export class SPMarker extends Marker {
  public speaker: string;

  public getIdentifier(): string {
    return "sp";
  }

  public preProcess(input: string): string {
    this.speaker = input.trim();
    return "";
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
