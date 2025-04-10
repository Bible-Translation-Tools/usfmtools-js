import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class XOMarker extends Marker {
  public originRef: string;

  public getIdentifier(): string {
    return "xo";
  }

  public preProcess(input: string): string {
    this.originRef = input.trim();
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
