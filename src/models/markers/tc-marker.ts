import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class TCMarker extends Marker {
  public columnPosition: number = 1;

  public getIdentifier(): string {
    return "tc";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
