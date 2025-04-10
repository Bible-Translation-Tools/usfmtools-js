import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class SLSMarker extends Marker {
  public getIdentifier(): string {
    return "sls";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name];
  }
}
