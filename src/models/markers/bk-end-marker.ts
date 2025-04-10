import { Marker } from "./marker";

export class BKEndMarker extends Marker {
  public getIdentifier(): string {
    return "bk*";
  }
}
