import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { BKMarker } from "./bk-marker";
import { BKEndMarker } from "./bk-end-marker";
import { BDMarker } from "./bd-marker";
import { BDEndMarker } from "./bd-end-marker";
import { ITMarker } from "./it-marker";
import { ITEndMarker } from "./it-end-marker";
import { SCMarker } from "./sc-marker";
import { SCEndMarker } from "./sc-end-marker";
import { BDITMarker } from "./bdit-marker";
import { BDITEndMarker } from "./bdit-end-marker";
import { NDMarker } from "./nd-marker";
import { NDEndMarker } from "./nd-end-marker";
import { NOMarker } from "./no-marker";
import { NOEndMarker } from "./no-end-marker";
import { SUPMarker } from "./sup-marker";
import { SUPEndMarker } from "./sup-end-marker";

export class IPQMarker extends Marker {
  public getIdentifier(): string {
    return "ipq";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      TextBlock,
      BKMarker,
      BKEndMarker,
      BDMarker,
      BDEndMarker,
      ITMarker,
      ITEndMarker,
      SCMarker,
      SCEndMarker,
      BDITMarker,
      BDITEndMarker,
      NDMarker,
      NDEndMarker,
      NOMarker,
      NOEndMarker,
      SUPMarker,
      SUPEndMarker,
    ];
  }
}
