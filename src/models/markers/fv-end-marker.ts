import { Marker } from "./marker";

export class FVEndMarker extends Marker {
  public getIdentifier(): string {
    return "fv*";
  }
}
