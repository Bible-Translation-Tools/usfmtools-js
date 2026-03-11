import { Marker } from "./marker";

export class IOTMarker extends Marker {
  public title: string;

  public getIdentifier(): string {
    return "iot";
  }

  public getRawValue(): string {
    return this.title || "";
  }

  public preProcess(input: string): string {
    this.title = input.trim();
    return "";
  }
}
