import { Marker } from "./marker";

export class PNEndMarker extends Marker {
  public getIdentifier(): string {
    return "pn*";
  }
}
