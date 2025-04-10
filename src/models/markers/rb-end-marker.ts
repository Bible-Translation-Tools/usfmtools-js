import { Marker } from "./marker";

export class RBEndMarker extends Marker {
  public getIdentifier(): string {
    return "rb*";
  }
}
