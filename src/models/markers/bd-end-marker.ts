import { Marker } from "./marker";

export class BDEndMarker extends Marker {
  public getIdentifier(): string {
    return "bd*";
  }
}
