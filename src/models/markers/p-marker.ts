import { Marker } from "./marker";
import { VMarker } from "./v-marker";
import { BMarker } from "./b-marker";
import { SPMarker } from "./sp-marker";
import { TextBlock } from "./text-block";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { LIMarker } from "./li-marker";
import { QMarker } from "./q-marker";
import { XMarker } from "./x-marker";

export class PMarker extends Marker {
  public getIdentifier(): string {
    return "p";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      VMarker,
      BMarker,
      SPMarker,
      TextBlock,
      FMarker,
      FEndMarker,
      LIMarker,
      QMarker,
      XMarker,
    ];
  }
}
