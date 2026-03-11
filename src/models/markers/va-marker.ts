import { Marker } from "./marker";

export class VAMarker extends Marker {
  public altVerseNumber: string;

  public getIdentifier(): string {
    return "va";
  }

  public getRawValue(): string {
    return this.altVerseNumber || "";
  }

  public preProcess(input: string): string {
    this.altVerseNumber = input.trim();
    return "";
  }
}
