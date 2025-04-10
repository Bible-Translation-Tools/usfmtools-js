import { Marker } from "./marker";

export class TOC1Marker extends Marker {
  public longTableOfContentsText: string;

  public getIdentifier(): string {
    return "toc1";
  }

  public preProcess(input: string): string {
    this.longTableOfContentsText = input.trim();
    return "";
  }
}
