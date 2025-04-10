import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class LIKMarker extends Marker {
  public getIdentifier(): string {
    return "lik";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
