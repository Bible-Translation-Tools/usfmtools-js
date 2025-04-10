import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class ORDMarker extends Marker {
  public getIdentifier(): string {
    return "ord";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
