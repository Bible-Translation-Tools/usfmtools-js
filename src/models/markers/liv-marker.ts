import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class LIVMarker extends Marker {
  public getIdentifier(): string {
    return "liv";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
