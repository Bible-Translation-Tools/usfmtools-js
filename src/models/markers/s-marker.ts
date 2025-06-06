import { Marker } from "./marker";
import { RMarker } from "./r-marker";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { SCMarker } from "./sc-marker";
import { SCEndMarker } from "./sc-end-marker";
import { EMMarker } from "./em-marker";
import { EMEndMarker } from "./em-end-marker";
import { BDMarker } from "./bd-marker";
import { BDEndMarker } from "./bd-end-marker";
import { ITMarker } from "./it-marker";
import { ITEndMarker } from "./it-end-marker";
import { BDITMarker } from "./bdit-marker";
import { BDITEndMarker } from "./bdit-end-marker";
import { NOMarker } from "./no-marker";
import { NOEndMarker } from "./no-end-marker";
import { SUPMarker } from "./sup-marker";
import { SUPEndMarker } from "./sup-end-marker";
import { TextBlock } from "./text-block";

export class SMarker extends Marker {
  public weight: number = 1;
  public text: string;

  public getIdentifier(): string {
    return "s";
  }

  public preProcess(input: string): string {
    this.text = input.trimStart();
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      RMarker,
      FMarker,
      FEndMarker,
      SCMarker,
      SCEndMarker,
      EMMarker,
      EMEndMarker,
      BDMarker,
      BDEndMarker,
      ITMarker,
      ITEndMarker,
      BDITMarker,
      BDITEndMarker,
      NOMarker,
      NOEndMarker,
      SUPMarker,
      SUPEndMarker,
      TextBlock,
    ];
  }
}
