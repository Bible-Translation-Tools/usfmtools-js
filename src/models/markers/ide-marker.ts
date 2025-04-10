import { Marker } from "./marker";

export class IDEMarker extends Marker {
  public encoding: string;

  public getIdentifier(): string {
    return "ide";
  }

  public preProcess(input: string): string {
    this.encoding = input.trim();
    return "";
  }
}
