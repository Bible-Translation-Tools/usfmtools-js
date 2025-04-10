import { Marker } from "./marker";

export class TLEndMarker extends Marker {
  public getIdentifier(): string {
    return "tl*";
  }
}
