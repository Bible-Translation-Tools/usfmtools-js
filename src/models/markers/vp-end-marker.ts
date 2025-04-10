import { Marker } from "./marker";

export class VPEndMarker extends Marker {
  public getIdentifier(): string {
    return "vp*";
  }
}
