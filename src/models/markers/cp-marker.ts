import { Marker } from "./marker";

export class CPMarker extends Marker {
  public publishedChapterMarker: string;

  public getIdentifier(): string {
    return "cp";
  }

  public getRawValue(): string {
    return this.publishedChapterMarker || "";
  }

  public preProcess(input: string): string {
    this.publishedChapterMarker = input.trim();
    return "";
  }
}
