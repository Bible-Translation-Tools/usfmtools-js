import { Marker } from "./marker";

export class RQEndMarker extends Marker {
  public getIdentifier(): string {
    return "rq*";
  }
}
