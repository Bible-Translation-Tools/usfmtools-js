import { Marker } from "./marker";

export class TextBlock extends Marker {
  public text: string;

  public constructor(text: string) {
    super();
    this.text = text;
  }

  public getIdentifier(): string {
    return "";
  }

  public getRawContents(): string {
    return this.text;
  }
}
