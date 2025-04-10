import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class SIGMarker extends Marker {
  public getIdentifier(): string {
    return "sig";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
