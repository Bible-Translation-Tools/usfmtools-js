import { Marker } from "./marker";

export class CAEndMarker extends Marker {
  public getIdentifier(): string {
    return "ca*";
  }
}
