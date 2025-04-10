import { Marker } from "./marker";

export class QACEndMarker extends Marker {
  public getIdentifier(): string {
    return "qac*";
  }
}
