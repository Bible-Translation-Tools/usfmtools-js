import { Marker } from "./marker";
import { HMarker } from "./h-marker";
import { IDEMarker } from "./ide-marker";
import { IDMarker } from "./id-marker";
import { IBMarker } from "./ib-marker";
import { IQMarker } from "./iq-marker";
import { ILIMarker } from "./ili-marker";
import { IOTMarker } from "./iot-marker";
import { IOMarker } from "./io-marker";
import { STSMarker } from "./sts-marker";
import { USFMMarker } from "./usfm-marker";
import { TOC1Marker } from "./toc1-marker";
import { TOC2Marker } from "./toc2-marker";
import { TOC3Marker } from "./toc3-marker";
import { TOCA1Marker } from "./toca1-marker";
import { TOCA2Marker } from "./toca2-marker";
import { TOCA3Marker } from "./toca3-marker";
import { ISMarker } from "./is-marker";
import { MTMarker } from "./mt-marker";
import { IMTMarker } from "./imt-marker";
import { IPMarker } from "./ip-marker";
import { IPIMarker } from "./ipi-marker";
import { IMMarker } from "./im-marker";
import { IMIMarker } from "./imi-marker";
import { IPQMarker } from "./ipq-marker";
import { IMQMarker } from "./imq-marker";
import { IPRMarker } from "./ipr-marker";
import { CLMarker } from "./cl-marker";
import { CMarker } from "./c-marker";

export class USFMDocument extends Marker {
  public contents: (Marker | USFMDocument)[] = [];

  public getIdentifier(): string {
    return "";
  }

  public getAllowedContents(): string[] {
    return [
      HMarker.name,
      IDEMarker.name,
      IDMarker.name,
      IBMarker.name,
      IQMarker.name,
      ILIMarker.name,
      IOTMarker.name,
      IOMarker.name,
      STSMarker.name,
      USFMMarker.name,
      TOC1Marker.name,
      TOC2Marker.name,
      TOC3Marker.name,
      TOCA1Marker.name,
      TOCA2Marker.name,
      TOCA3Marker.name,
      ISMarker.name,
      MTMarker.name,
      IMTMarker.name,
      IPMarker.name,
      IPIMarker.name,
      IMMarker.name,
      IMIMarker.name,
      IPQMarker.name,
      IMQMarker.name,
      IPRMarker.name,
      CLMarker.name,
      CMarker.name,
    ];
  }

  constructor() {
    super();
  }

  public insert(input: Marker | USFMDocument): void {
    if (input instanceof USFMDocument) {
      this.insertDocument(input);
    } else {
      this.insertMarker(input);
    }
  }

  public insertMarker(input: Marker): void {
    if (!this.tryInsert(input)) {
      this.contents.push(input);
    }
  }

  public insertDocument(document: USFMDocument): void {
    this.insertMultiple(document.contents);
  }

  public insertMultiple(input: (Marker | USFMDocument)[]): void {
    for (const i of input) {
      this.insert(i);
    }
  }
}
