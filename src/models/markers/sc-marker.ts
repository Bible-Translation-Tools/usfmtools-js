import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class SCMarker extends Marker {
  public getIdentifier(): string {
    return "sc";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
