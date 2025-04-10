import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class TCRMarker extends Marker {
  public columnPosition: number = 1;

  public getIdentifier(): string {
    return "tcr";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
