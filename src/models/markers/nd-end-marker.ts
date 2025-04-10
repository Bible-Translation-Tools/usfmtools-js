import { Marker } from "./marker";

export class NDEndMarker extends Marker {
  public getIdentifier(): string {
    return "nd*";
  }
}
