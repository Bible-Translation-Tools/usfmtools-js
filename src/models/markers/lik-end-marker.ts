import { Marker } from "./marker";

export class LIKEndMarker extends Marker {
  public getIdentifier(): string {
    return "lik*";
  }
}
