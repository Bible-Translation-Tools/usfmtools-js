import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class WJMarker extends Marker {
  public getIdentifier(): string {
    return "wj";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
