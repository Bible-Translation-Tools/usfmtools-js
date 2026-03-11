import { Marker } from "./marker";

export class FVMarker extends Marker {
  public verseCharacter: string;

  public getIdentifier(): string {
    return "fv";
  }

  public getRawValue(): string {
    return this.verseCharacter || "";
  }

  public preProcess(input: string): string {
    this.verseCharacter = input.trim();
    return "";
  }
}
