import { Marker } from "./marker";

export class SLSEndMarker extends Marker {
  public getIdentifier(): string {
    return "sls*";
  }
}
