import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PRMarker extends Marker {
  public getIdentifier(): string {
    return "pr";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
