import { Marker } from "./marker";

export class IOREndMarker extends Marker {
  public getIdentifier(): string {
    return "ior*";
  }
}
