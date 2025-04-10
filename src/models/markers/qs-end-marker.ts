import { QSMarker } from "./qs-marker";

export class QSEndMarker extends QSMarker {
  public getIdentifier(): string {
    return "qs*";
  }
}
