import { Marker } from "./marker";

export class ITEndMarker extends Marker {
  public getIdentifier(): string {
    return "it*";
  }
}
