import { Marker } from "./marker";
import { XOMarker } from "./xo-marker";
import { XTMarker } from "./xt-marker";
import { XQMarker } from "./xq-marker";
import { TextBlock } from "./text-block";

export class XMarker extends Marker {
  public crossRefCaller: string;

  public getIdentifier(): string {
    return "x";
  }

  public preProcess(input: string): string {
    this.crossRefCaller = input.trim();
    return "";
  }

  public getAllowedContents(): string[] {
    return [XOMarker.name, XTMarker.name, XQMarker.name, TextBlock.name];
  }
}
