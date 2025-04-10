import { Marker } from "./marker";

export class BKMarker extends Marker {
  public bookTitle: string;

  public getIdentifier(): string {
    return "bk";
  }

  public preProcess(input: string): string {
    this.bookTitle = input.trim();
    return "";
  }
}
