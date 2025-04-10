import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class RMarker extends Marker {
  public getIdentifier(): string {
    return "r";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
