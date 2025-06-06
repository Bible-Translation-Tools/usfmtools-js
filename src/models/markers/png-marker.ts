import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PNGMarker extends Marker {
  public getIdentifier(): string {
    return "png";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
