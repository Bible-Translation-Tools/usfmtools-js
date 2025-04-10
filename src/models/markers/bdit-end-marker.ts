import { Marker } from "./marker";

export class BDITEndMarker extends Marker {
  public getIdentifier(): string {
    return "bdit*";
  }
}
