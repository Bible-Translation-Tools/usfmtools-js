import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class IORMarker extends Marker {
  public getIdentifier(): string {
    return "ior";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
