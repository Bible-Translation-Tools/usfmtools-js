import { Marker } from "./marker";

export class NOEndMarker extends Marker {
  public getIdentifier(): string {
    return "no*";
  }
}
