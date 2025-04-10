import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PMCMarker extends Marker {
  public getIdentifier(): string {
    return "pmc";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
