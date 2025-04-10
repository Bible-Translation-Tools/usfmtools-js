import { Marker } from "./marker";

export class IBMarker extends Marker {
  public getIdentifier(): string {
    return "ib";
  }
}
