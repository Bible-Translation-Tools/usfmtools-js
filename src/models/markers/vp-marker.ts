import { Marker } from "./marker";

export class VPMarker extends Marker {
  public verseCharacter: string;

  public getIdentifier(): string {
    return "vp";
  }

  public preProcess(input: string): string {
    this.verseCharacter = input.trim();
    return "";
  }
}
