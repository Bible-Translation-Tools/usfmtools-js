import { Marker } from "./marker";

export class SCEndMarker extends Marker {
  public getIdentifier(): string {
    return "sc*";
  }
}
