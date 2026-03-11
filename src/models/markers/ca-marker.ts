import { Marker } from "./marker";

/**
 * Alternate chapter number
 */
export class CAMarker extends Marker {
  public altChapterNumber: string;

  public getIdentifier(): string {
    return "ca";
  }

  public getRawValue(): string {
    return this.altChapterNumber || "";
  }

  public preProcess(input: string): string {
    this.altChapterNumber = input.trim();
    return "";
  }

  public isValid(): boolean {
    return !Marker.isNullOrWhiteSpace(this.altChapterNumber);
  }
}
