import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PMRMarker extends Marker {
  public getIdentifier(): string {
    return "pmr";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
