import { Marker } from "./marker";

export class WAEndMarker extends Marker {
  public getIdentifier(): string {
    return "wa*";
  }
}
