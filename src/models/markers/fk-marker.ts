import { Marker } from "./marker";

export class FKMarker extends Marker {
  public footNoteKeyword: string;

  public getIdentifier(): string {
    return "fk";
  }

  public preProcess(input: string): string {
    this.footNoteKeyword = input.trim();
    return "";
  }
}
