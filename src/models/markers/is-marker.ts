import { Marker } from "./marker";

export class ISMarker extends Marker {
  public weight: number = 1;
  public heading: string;

  public getIdentifier(): string {
    return "is";
  }

  public preProcess(input: string): string {
    this.heading = input.trim();
    return "";
  }
}
