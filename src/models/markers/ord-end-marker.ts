import { Marker } from "./marker";

export class ORDEndMarker extends Marker {
  public getIdentifier(): string {
    return "ord*";
  }
}
