import { Marker } from "./marker";

export class IDEMarker extends Marker {
  public encoding: string;

  public getIdentifier(): string {
    return "ide";
  }

  public getRawValue(): string {
    return this.encoding || "";
  }

  public preProcess(input: string): string {
    this.encoding = input.trim();
    return "";
  }

  public isValid(): boolean {
    return !Marker.isNullOrWhiteSpace(this.encoding);
  }
}
