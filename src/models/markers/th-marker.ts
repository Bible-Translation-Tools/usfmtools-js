import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class THMarker extends Marker {
  public columnPosition: number = 1;

  public getIdentifier(): string {
    return "th";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
