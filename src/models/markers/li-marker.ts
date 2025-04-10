import { Marker } from "./marker";
import { VMarker } from "./v-marker";
import { TextBlock } from "./text-block";

export class LIMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "li";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [VMarker.name, TextBlock.name];
  }
}
