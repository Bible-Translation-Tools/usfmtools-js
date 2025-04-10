import { Marker } from "./marker";

export class VAMarker extends Marker {
  public getIdentifier(): string {
    return "va";
  }

  public preProcess(input: string): string {
    return input.trim();
  }
}
