import { Marker } from "./marker";

export class LIVEndMarker extends Marker {
  public getIdentifier(): string {
    return "liv*";
  }
}
