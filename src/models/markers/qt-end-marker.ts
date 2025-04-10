import { Marker } from "./marker";

export class QTEndMarker extends Marker {
  public getIdentifier(): string {
    return "qt*";
  }
}
