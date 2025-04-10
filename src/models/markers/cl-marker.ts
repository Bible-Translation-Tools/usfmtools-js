import { Marker } from "./marker";

export class CLMarker extends Marker {
  public label: string;

  public getIdentifier(): string {
    return "cl";
  }

  public preProcess(input: string): string {
    this.label = input.trim();
    return "";
  }
}
