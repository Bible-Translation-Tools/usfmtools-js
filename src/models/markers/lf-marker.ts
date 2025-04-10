import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class LFMarker extends Marker {
  public getIdentifier(): string {
    return "lf";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
