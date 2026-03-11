import { Marker } from "./marker";

export class TOCA3Marker extends Marker {
  public altBookAbbreviation: string;

  public getIdentifier(): string {
    return "toca3";
  }

  public getRawValue(): string {
    return this.altBookAbbreviation || "";
  }

  public preProcess(input: string): string {
    this.altBookAbbreviation = input.trim();
    return "";
  }
}
