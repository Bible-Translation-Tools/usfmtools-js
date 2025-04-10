import { Marker } from "./marker";

export class IDMarker extends Marker {
  public textIdentifier: string;

  public getIdentifier(): string {
    return "id";
  }

  public preProcess(input: string): string {
    this.textIdentifier = input.trim();
    return "";
  }
}
