import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class WHMarker extends Marker {
  public getIdentifier(): string {
    return "wh";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
