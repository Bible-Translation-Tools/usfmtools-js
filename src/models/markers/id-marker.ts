import { Marker } from "./marker";

export class IDMarker extends Marker {
  public textIdentifier: string;

  public getIdentifier(): string {
    return "id";
  }

  public getRawValue(): string {
    return this.textIdentifier || "";
  }

  public preProcess(input: string): string {
    this.textIdentifier = input.trim();
    return "";
  }

  public isValid(): boolean {
    return !Marker.isNullOrWhiteSpace(this.textIdentifier);
  }
}
