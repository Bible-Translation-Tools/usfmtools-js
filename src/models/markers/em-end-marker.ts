import { Marker } from "./marker";

export class EMEndMarker extends Marker {
  public getIdentifier(): string {
    return "em*";
  }
}
