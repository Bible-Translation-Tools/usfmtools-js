import { Marker } from "./marker";

export class VAMarker extends Marker {
  public altVerseNumber: string;

  public getIdentifier(): string {
    return "va";
  }

  public preProcess(input: string): string {
    this.altVerseNumber = input.trim();
    return "";
  }
}
