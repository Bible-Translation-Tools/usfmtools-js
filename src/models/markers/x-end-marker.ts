import { Marker } from "./marker";

export class XEndMarker extends Marker {
  public getIdentifier(): string {
    return "x*";
  }
}
