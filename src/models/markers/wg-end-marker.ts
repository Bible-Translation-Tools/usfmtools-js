import { Marker } from "./marker";

export class WGEndMarker extends Marker {
  public getIdentifier(): string {
    return "wg*";
  }
}
