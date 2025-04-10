import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class RBMarker extends Marker {
  public getIdentifier(): string {
    return "rb";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
