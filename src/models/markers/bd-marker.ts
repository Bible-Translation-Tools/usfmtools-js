import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class BDMarker extends Marker {
  public text: string;

  public getIdentifier(): string {
    return "bd";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
