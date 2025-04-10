import { Marker } from "./marker";

export class TOC3Marker extends Marker {
  public bookAbbreviation: string;

  public getIdentifier(): string {
    return "toc3";
  }

  public preProcess(input: string): string {
    this.bookAbbreviation = input.trim();
    return "";
  }
}
