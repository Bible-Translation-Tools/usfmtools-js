import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { TLMarker } from "./tl-marker";
import { TLEndMarker } from "./tl-end-marker";
import { WMarker } from "./w-marker";
import { WEndMarker } from "./w-end-marker";

export class QMMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "qm";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): string[] {
    return [
      TextBlock.name,
      FMarker.name,
      FEndMarker.name,
      TLMarker.name,
      TLEndMarker.name,
      WMarker.name,
      WEndMarker.name,
    ];
  }
}
