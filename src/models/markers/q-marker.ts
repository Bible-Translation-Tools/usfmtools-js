import { Marker } from "./marker";
import { BMarker } from "./b-marker";
import { QSMarker } from "./qs-marker";
import { QSEndMarker } from "./qs-end-marker";
import { TextBlock } from "./text-block";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { TLMarker } from "./tl-marker";
import { TLEndMarker } from "./tl-end-marker";
import { WMarker } from "./w-marker";
import { WEndMarker } from "./w-end-marker";
import { VMarker } from "./v-marker";

export class QMarker extends Marker {
  public depth: number = 1;
  public text: string;
  public isPoetryBlock: boolean = false;

  public getIdentifier(): string {
    return "q";
  }

  public preProcess(input: string): string {
    return input.trimStart();
  }

  public getAllowedContents(): string[] {
    return [
      BMarker.name,
      QSMarker.name,
      QSEndMarker.name,
      TextBlock.name,
      FMarker.name,
      FEndMarker.name,
      TLMarker.name,
      TLEndMarker.name,
      WMarker.name,
      WEndMarker.name,
      VMarker.name,
    ];
  }

  public tryInsert(input: Marker): boolean {
    if (
      input.constructor.name === VMarker.name &&
      this.contents.some((m) => m.constructor.name === VMarker.name)
    ) {
      return false;
    }

    return super.tryInsert(input);
  }
}
