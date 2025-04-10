import { Marker } from "./marker";

export class IOTMarker extends Marker {
  public title: string;

  public getIdentifier(): string {
    return "iot";
  }

  public preProcess(input: string): string {
    this.title = input.trim();
    return "";
  }
}
