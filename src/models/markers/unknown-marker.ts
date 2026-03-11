import { Marker } from "./marker";

export class UnknownMarker extends Marker {
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

  public getRawContents(): string {
    let result = "";
    if (this.parsedIdentifier) {
      result = "\\" + this.parsedIdentifier;
    }
    const rawValue = this.getRawValue();
    if (rawValue) {
      result += " " + rawValue;
    }
    for (const child of this.contents) {
      const childContent = child.getRawContents();
      if (
        childContent.length > 0 &&
        result.length > 0 &&
        !result.endsWith(" ") &&
        !childContent.startsWith(" ")
      ) {
        result += " ";
      }
      result += childContent;
    }
    return result;
  }

  public preProcess(input: string): string {
    this.parsedValue = input;
    return "";
  }
}
