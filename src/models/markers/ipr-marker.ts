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

export class IPRMarker extends Marker {
  public getIdentifier(): string {
    return "ipr";
  }

  public preProcess(input: string): string {
    return input.trim();
  }

  public getAllowedContents(): string[] {
    return [
      TextBlock.name,
      BKMarker.name,
      BKEndMarker.name,
      BDMarker.name,
      BDEndMarker.name,
      ITMarker.name,
      ITEndMarker.name,
      SCMarker.name,
      SCEndMarker.name,
      BDITMarker.name,
      BDITEndMarker.name,
      NDMarker.name,
      NDEndMarker.name,
      NOMarker.name,
      NOEndMarker.name,
      SUPMarker.name,
      SUPEndMarker.name,
    ];
  }
}
