import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class WGMarker extends Marker {
  public getIdentifier(): string {
    return "wg";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
