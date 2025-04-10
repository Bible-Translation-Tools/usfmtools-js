import { Marker } from "./marker";

export class TOCA2Marker extends Marker {
  public altShortTableOfContentsText: string;

  public getIdentifier(): string {
    return "toca2";
  }

  public preProcess(input: string): string {
    this.altShortTableOfContentsText = input.trim();
    return "";
  }
}
