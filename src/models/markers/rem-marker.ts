import { Marker } from "./marker";

export class REMMarker extends Marker {
  public comment: string;

  public getIdentifier(): string {
    return "rem";
  }

  public preProcess(input: string): string {
    this.comment = input.trim();
    return "";
  }
}
