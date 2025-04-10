import { Marker } from "./marker";

export class FQEndMarker extends Marker {
  public getIdentifier(): string {
    return "fq*";
  }
}
