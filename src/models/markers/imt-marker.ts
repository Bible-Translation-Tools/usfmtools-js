import { Marker } from "./marker";

export class IMTMarker extends Marker {
  public weight: number = 1;
  public introTitle: string;

  public getIdentifier(): string {
    return "imt";
  }

  public getRawValue(): string {
    return this.introTitle || "";
  }

  public preProcess(input: string): string {
    this.introTitle = input.trim();
    return "";
  }
}
