import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class PMOMarker extends Marker {
  public getIdentifier(): string {
    return "pmo";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
