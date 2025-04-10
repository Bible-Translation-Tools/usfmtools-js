import { BMarker } from "./b-marker";
import { CAEndMarker } from "./ca-end-marker";
import { CAMarker } from "./ca-marker";
import { CDMarker } from "./cd-marker";
import { CLMarker } from "./cl-marker";
import { CPMarker } from "./cp-marker";
import { DMarker } from "./d-marker";
import { FEndMarker } from "./f-end-marker";
import { FMarker } from "./f-marker";
import { LIMarker } from "./li-marker";
import { MMarker } from "./m-marker";
import { Marker } from "./marker";
import { MIMarker } from "./mi-marker";
import { MSMarker } from "./ms-marker";
import { NBMarker } from "./nb-marker";
import { PMarker } from "./p-marker";
import { PCMarker } from "./pc-marker";
import { PIMarker } from "./pi-marker";
import { QMarker } from "./q-marker";
import { QAMarker } from "./qa-marker";
import { QSEndMarker } from "./qs-end-marker";
import { QSMarker } from "./qs-marker";
import { RMarker } from "./r-marker";
import { REMMarker } from "./rem-marker";
import { SMarker } from "./s-marker";
import { SPMarker } from "./sp-marker";
import { TableBlock } from "./table-block";
import { TextBlock } from "./text-block";
import { VMarker } from "./v-marker";
import { VAEndMarker } from "./va-end-marker";
import { VAMarker } from "./va-marker";

export class CMarker extends Marker {
  private static regex: RegExp = / *(\d*) *(.*)/;
  public number: number;

  public getIdentifier(): string {
    return "c";
  }

  public preProcess(input: string): string {
    const matches = input.match(CMarker.regex);

    if (matches && matches.length > 0) {
      if (Marker.isNullOrWhiteSpace(matches[1])) {
        this.number = 0;
      } else {
        this.number = parseInt(matches[1], 10);
      }

      if (Marker.isNullOrWhiteSpace(matches[2])) {
        return "";
      }

      return matches[2].trimEnd();
    }

    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      MMarker,
      MSMarker,
      SMarker,
      BMarker,
      DMarker,
      VMarker,
      PMarker,
      PCMarker,
      CDMarker,
      CPMarker,
      CLMarker,
      QMarker,
      QSMarker,
      QSEndMarker,
      QAMarker,
      NBMarker,
      RMarker,
      LIMarker,
      TableBlock,
      MIMarker,
      PIMarker,
      CAMarker,
      CAEndMarker,
      SPMarker,
      TextBlock,
      REMMarker,
      VAMarker,
      VAEndMarker,
      FMarker,
      FEndMarker,
    ];
  }

  public getPublishedChapterMarker(): string {
    const childCharacterMarkers = this.getChildMarkers(CPMarker);
    if (childCharacterMarkers.length > 0) {
      const marker = childCharacterMarkers[0] as CPMarker;
      return marker.publishedChapterMarker;
    } else {
      return String(this.number);
    }
  }

  public customChapterLabel(): string {
    const childChapLabelMarker = this.getChildMarkers(CLMarker);
    if (childChapLabelMarker.length > 0) {
      const marker = childChapLabelMarker[0] as CLMarker;
      return marker.label;
    } else {
      return this.getPublishedChapterMarker();
    }
  }
}
