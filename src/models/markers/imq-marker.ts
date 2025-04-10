import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { BKMarker } from "./bk-marker";
import { BKEndMarker } from "./bk-end-marker";
import { BDMarker } from "./bd-marker";
import { BDEndMarker } from "./bd-end-marker";
import { ITMarker } from "./it-marker";
import { ITEndMarker } from "./it-end-marker";

export class IMQMarker extends Marker {
  public getIdentifier(): string {
    return "imq";
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
    ];
  }
}
