import { Marker } from "./marker";

export class SIGEndMarker extends Marker {
  public getIdentifier(): string {
    return "sig*";
  }
}
