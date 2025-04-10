import { Marker } from "./marker";
import { VMarker } from "./v-marker";
import { BMarker } from "./b-marker";
import { SPMarker } from "./sp-marker";
import { TextBlock } from "./text-block";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { LIMarker } from "./li-marker";
import { QMarker } from "./q-marker";

export class PIMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "pi";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): string[] {
    return [
      VMarker.name,
      BMarker.name,
      SPMarker.name,
      TextBlock.name,
      FMarker.name,
      FEndMarker.name,
      LIMarker.name,
      QMarker.name,
    ];
  }
}
