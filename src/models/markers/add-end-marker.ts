import { Marker } from "./marker";

export class ADDEndMarker extends Marker {
  public getIdentifier(): string {
    return "add*";
  }
}
