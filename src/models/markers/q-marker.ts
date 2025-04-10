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

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      BMarker,
      QSMarker,
      QSEndMarker,
      TextBlock,
      FMarker,
      FEndMarker,
      TLMarker,
      TLEndMarker,
      WMarker,
      WEndMarker,
      VMarker,
    ];
  }

  public tryInsert(input: Marker): boolean {
    if (
      input instanceof VMarker &&
      this.contents.some((m) => m instanceof VMarker)
    ) {
      return false;
    }

    return super.tryInsert(input);
  }
}
