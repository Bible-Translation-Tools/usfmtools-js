import { Marker } from "./marker";

export class HMarker extends Marker {
  public headerText: string;

  public getIdentifier(): string {
    return "h";
  }

  public getRawValue(): string {
    return this.headerText || "";
  }

  public preProcess(input: string): string {
    this.headerText = input.trim();
    return "";
  }
}
