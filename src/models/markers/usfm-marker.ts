import { Marker } from "./marker";

export class USFMMarker extends Marker {
  /**
   * Marker for USFM version
   */
  public version: string;

  public getIdentifier(): string {
    return "usfm";
  }

  public preProcess(input: string): string {
    this.version = input.trim();
    return "";
  }
}
