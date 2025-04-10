import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class WAMarker extends Marker {
  public getIdentifier(): string {
    return "wa";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
