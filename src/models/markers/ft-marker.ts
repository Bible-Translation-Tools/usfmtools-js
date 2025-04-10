import { Marker } from "./marker";
import { TLMarker } from "./tl-marker";
import { TLEndMarker } from "./tl-end-marker";
import { WMarker } from "./w-marker";
import { WEndMarker } from "./w-end-marker";
import { TextBlock } from "./text-block";
import { ITMarker } from "./it-marker";
import { ITEndMarker } from "./it-end-marker";
import { SCMarker } from "./sc-marker";
import { SCEndMarker } from "./sc-end-marker";
import { SUPMarker } from "./sup-marker";
import { SUPEndMarker } from "./sup-end-marker";
import { BKMarker } from "./bk-marker";
import { BKEndMarker } from "./bk-end-marker";
import { BDMarker } from "./bd-marker";
import { BDEndMarker } from "./bd-end-marker";

export class FTMarker extends Marker {
  public getIdentifier(): string {
    return "ft";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      TLMarker,
      TLEndMarker,
      WMarker,
      WEndMarker,
      TextBlock,
      ITMarker,
      ITEndMarker,
      SCMarker,
      SCEndMarker,
      SUPMarker,
      SUPEndMarker,
      BKMarker,
      BKEndMarker,
      BDMarker,
      BDEndMarker,
    ];
  }
}
