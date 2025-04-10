import { Marker } from "./marker";

export class FIGEndMarker extends Marker {
  public getIdentifier(): string {
    return "fig*";
  }
}
