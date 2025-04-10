import { Marker } from "./marker";
import { TextBlock } from "./text-block";

/**
 * Emphasis text
 */
export class EMMarker extends Marker {
  public getIdentifier(): string {
    return "em";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
