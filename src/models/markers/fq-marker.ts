import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { TLMarker } from "./tl-marker";
import { TLEndMarker } from "./tl-end-marker";
import { WMarker } from "./w-marker";
import { WEndMarker } from "./w-end-marker";

export class FQMarker extends Marker {
  public getIdentifier(): string {
    return "fq";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock, TLMarker, TLEndMarker, WMarker, WEndMarker];
  }
}
