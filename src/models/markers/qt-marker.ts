import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class QTMarker extends Marker {
  public getIdentifier(): string {
    return "qt";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
