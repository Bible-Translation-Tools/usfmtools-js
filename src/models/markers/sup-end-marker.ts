import { Marker } from "./marker";

export class SUPEndMarker extends Marker {
  public getIdentifier(): string {
    return "sup*";
  }
}
