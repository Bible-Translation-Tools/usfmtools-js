import { Marker } from "./marker";

export class STSMarker extends Marker {
  public statusText: string;

  public getIdentifier(): string {
    return "sts";
  }

  public preProcess(input: string): string {
    this.statusText = input.trim();
    return "";
  }
}
