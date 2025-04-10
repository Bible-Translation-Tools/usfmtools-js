import { Marker } from "./marker";

export class MTMarker extends Marker {
  public weight: number = 1;
  public title: string;

  public getIdentifier(): string {
    return "mt";
  }

  public preProcess(input: string): string {
    this.title = input.trim();
    return "";
  }
}
