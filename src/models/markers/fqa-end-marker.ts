import { Marker } from "./marker";

export class FQAEndMarker extends Marker {
  public getIdentifier(): string {
    return "fqa*";
  }
}
