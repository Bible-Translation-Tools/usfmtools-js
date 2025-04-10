import { Marker } from "./marker";

export class FRMarker extends Marker {
  public verseReference: string;

  public getIdentifier(): string {
    return "fr";
  }

  public preProcess(input: string): string {
    this.verseReference = input.trim();
    return "";
  }
}
