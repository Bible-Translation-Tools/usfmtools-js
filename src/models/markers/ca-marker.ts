import { Marker } from "./marker";

/**
 * Alternate chapter number
 */
export class CAMarker extends Marker {
  public altChapterNumber: string;

  public getIdentifier(): string {
    return "ca";
  }

  public preProcess(input: string): string {
    this.altChapterNumber = input.trim();
    return "";
  }
}
