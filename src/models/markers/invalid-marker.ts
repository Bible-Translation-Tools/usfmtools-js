import { Marker } from "./marker";

export class InvalidMarker extends Marker {
  public parsedIdentifier: string;
  public parsedValue: string;
  public line: number;

  public constructor() {
    super();
    this.line = 0;
  }

  public getIdentifier(): string {
    return "";
  }

  public getRawValue(): string {
    return this.parsedValue || "";
  }

  public preProcess(input: string): string {
    this.parsedValue = input;
    return "";
  }
}
