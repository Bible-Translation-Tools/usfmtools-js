import { Marker } from "./marker";

export class WHEndMarker extends Marker {
  public getIdentifier(): string {
    return "wh*";
  }
}
