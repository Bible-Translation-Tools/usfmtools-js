import { Marker } from "./marker";

export class VAEndMarker extends Marker {
  public getIdentifier(): string {
    return "va*";
  }
}
