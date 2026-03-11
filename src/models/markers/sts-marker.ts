import { Marker } from "./marker";

export class STSMarker extends Marker {
  public statusText: string;

  public getIdentifier(): string {
    return "sts";
  }

  public getRawValue(): string {
    return this.statusText || "";
  }

  public preProcess(input: string): string {
    this.statusText = input.trim();
    return "";
  }

  public isValid(): boolean {
    return !Marker.isNullOrWhiteSpace(this.statusText);
  }
}
