import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class IQMarker extends Marker {
  public depth: number = 1;
  public text: string;

  public getIdentifier(): string {
    return "iq";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
