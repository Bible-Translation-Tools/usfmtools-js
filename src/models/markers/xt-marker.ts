import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class XTMarker extends Marker {
  public getIdentifier(): string {
    return "xt";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
