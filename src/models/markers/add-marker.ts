import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class ADDMarker extends Marker {
  public getIdentifier(): string {
    return "add";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
