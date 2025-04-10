import { Marker } from "./marker";

export class TOC2Marker extends Marker {
  public shortTableOfContentsText: string;

  public getIdentifier(): string {
    return "toc2";
  }

  public preProcess(input: string): string {
    this.shortTableOfContentsText = input.trim();
    return "";
  }
}
