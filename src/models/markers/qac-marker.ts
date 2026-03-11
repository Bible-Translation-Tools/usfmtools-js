import { Marker } from "./marker";

export class QACMarker extends Marker {
  public acrosticLetter: string;

  public getIdentifier(): string {
    return "qac";
  }

  public getRawValue(): string {
    return this.acrosticLetter || "";
  }

  public preProcess(input: string): string {
    this.acrosticLetter = input.trim();
    return "";
  }
}
