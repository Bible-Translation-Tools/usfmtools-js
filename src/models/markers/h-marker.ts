import { Marker } from "./marker";

export class HMarker extends Marker {
  public headerText: string;

  public getIdentifier(): string {
    return "h";
  }

  public preProcess(input: string): string {
    this.headerText = input.trim();
    return "";
  }
}
