import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class SUPMarker extends Marker {
  public getIdentifier(): string {
    return "sup";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
