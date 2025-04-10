import { Marker } from "./marker";

export class PROEndMarker extends Marker {
  public getIdentifier(): string {
    return "pro*";
  }
}
