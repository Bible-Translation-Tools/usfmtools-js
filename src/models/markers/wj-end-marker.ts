import { Marker } from "./marker";

export class WJEndMarker extends Marker {
  public getIdentifier(): string {
    return "wj*";
  }
}
