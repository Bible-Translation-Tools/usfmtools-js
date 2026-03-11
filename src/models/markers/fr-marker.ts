import { Marker } from "./marker";

export class FRMarker extends Marker {
  public verseReference: string;

  public getIdentifier(): string {
    return "fr";
  }

  public getRawValue(): string {
    return this.verseReference || "";
  }

  public preProcess(input: string): string {
    this.verseReference = input.trim();
    return "";
  }

  public isValid(): boolean {
    return !Marker.isNullOrWhiteSpace(this.verseReference);
  }
}
