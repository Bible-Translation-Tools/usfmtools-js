import { Marker } from "./marker";

export class TOCA1Marker extends Marker {
  public altLongTableOfContentsText: string;

  public getIdentifier(): string {
    return "toca1";
  }

  public preProcess(input: string): string {
    this.altLongTableOfContentsText = input.trim();
    return "";
  }
}
