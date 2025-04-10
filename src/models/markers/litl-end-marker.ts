import { Marker } from "./marker";

export class LITLEndMarker extends Marker {
  public getIdentifier(): string {
    return "litl*";
  }
}
