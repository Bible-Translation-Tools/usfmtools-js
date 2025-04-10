import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PNMarker extends Marker {
  public getIdentifier(): string {
    return "pn";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
