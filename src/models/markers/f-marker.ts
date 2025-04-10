import { Marker } from "./marker";
import { FRMarker } from "./fr-marker";
import { FREndMarker } from "./fr-end-marker";
import { FKMarker } from "./fk-marker";
import { FTMarker } from "./ft-marker";
import { FVMarker } from "./fv-marker";
import { FVEndMarker } from "./fv-end-marker";
import { FPMarker } from "./fp-marker";
import { FQAMarker } from "./fqa-marker";
import { FQAEndMarker } from "./fqa-end-marker";
import { FQMarker } from "./fq-marker";
import { FQEndMarker } from "./fq-end-marker";
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

export class FMarker extends Marker {
  public footNoteCaller: string;

  public getIdentifier(): string {
    return "f";
  }

  public preProcess(input: string): string {
    this.footNoteCaller = input.trim();
    return "";
  }

  public getAllowedContents(): string[] {
    return [
      FRMarker.name,
      FREndMarker.name,
      FKMarker.name,
      FTMarker.name,
      FVMarker.name,
      FVEndMarker.name,
      FPMarker.name,
      FQAMarker.name,
      FQAEndMarker.name,
      FQMarker.name,
      FQEndMarker.name,
      TLMarker.name,
      TLEndMarker.name,
      WMarker.name,
      WEndMarker.name,
      TextBlock.name,
      ITMarker.name,
      ITEndMarker.name,
      SCMarker.name,
      SCEndMarker.name,
      SUPMarker.name,
      SUPEndMarker.name,
      BKMarker.name,
      BKEndMarker.name,
      BDMarker.name,
      BDEndMarker.name,
    ];
  }
}
