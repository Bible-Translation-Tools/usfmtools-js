import { Marker } from "./marker";

export class PNGEndMarker extends Marker {
  public getIdentifier(): string {
    return "png*";
  }
}
