import { Marker } from "./marker";

export class UnknownMarker extends Marker {
  public parsedIdentifier: string;
  public parsedValue: string;

  public getIdentifier(): string {
    return "";
  }

  public preProcess(input: string): string {
    this.parsedValue = input;
    return "";
  }
}
