import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class FPMarker extends Marker {
  public getIdentifier(): string {
    return "fp";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
