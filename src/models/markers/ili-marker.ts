import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class ILIMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "ili";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
