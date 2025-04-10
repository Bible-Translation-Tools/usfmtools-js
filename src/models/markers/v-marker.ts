import { ADDEndMarker } from "./add-end-marker";
import { ADDMarker } from "./add-marker";
import { BMarker } from "./b-marker";
import { BDEndMarker } from "./bd-end-marker";
import { BDMarker } from "./bd-marker";
import { BDITEndMarker } from "./bdit-end-marker";
import { BDITMarker } from "./bdit-marker";
import { BKEndMarker } from "./bk-end-marker";
import { BKMarker } from "./bk-marker";
import { CLSMarker } from "./cls-marker";
import { EMEndMarker } from "./em-end-marker";
import { EMMarker } from "./em-marker";
import { FEndMarker } from "./f-end-marker";
import { FMarker } from "./f-marker";
import { FIGEndMarker } from "./fig-end-marker";
import { FIGMarker } from "./fig-marker";
import { FREndMarker } from "./fr-end-marker";
import { FRMarker } from "./fr-marker";
import { ITEndMarker } from "./it-end-marker";
import { ITMarker } from "./it-marker";
import { KEndMarker } from "./k-end-marker";
import { KMarker } from "./k-marker";
import { LFMarker } from "./lf-marker";
import { LIMarker } from "./li-marker";
import { LIKEndMarker } from "./lik-end-marker";
import { LIKMarker } from "./lik-marker";
import { LITLEndMarker } from "./litl-end-marker";
import { LITLMarker } from "./litl-marker";
import { LIVEndMarker } from "./liv-end-marker";
import { LIVMarker } from "./liv-marker";
import { MMarker } from "./m-marker";
import { Marker } from "./marker";
import { MIMarker } from "./mi-marker";
import { NDEndMarker } from "./nd-end-marker";
import { NDMarker } from "./nd-marker";
import { NOEndMarker } from "./no-end-marker";
import { NOMarker } from "./no-marker";
import { ORDEndMarker } from "./ord-end-marker";
import { ORDMarker } from "./ord-marker";
import { PMarker } from "./p-marker";
import { PIMarker } from "./pi-marker";
import { PMCMarker } from "./pmc-marker";
import { PMOMarker } from "./pmo-marker";
import { PMRMarker } from "./pmr-marker";
import { PNEndMarker } from "./pn-end-marker";
import { PNMarker } from "./pn-marker";
import { PNGEndMarker } from "./png-end-marker";
import { PNGMarker } from "./png-marker";
import { PRMarker } from "./pr-marker";
import { PROEndMarker } from "./pro-end-marker";
import { PROMarker } from "./pro-marker";
import { QMarker } from "./q-marker";
import { QACEndMarker } from "./qac-end-marker";
import { QACMarker } from "./qac-marker";
import { QCMarker } from "./qc-marker";
import { QDMarker } from "./qd-marker";
import { QRMarker } from "./qr-marker";
import { QSEndMarker } from "./qs-end-marker";
import { QSMarker } from "./qs-marker";
import { QTEndMarker } from "./qt-end-marker";
import { QTMarker } from "./qt-marker";
import { RBEndMarker } from "./rb-end-marker";
import { RBMarker } from "./rb-marker";
import { REMMarker } from "./rem-marker";
import { RQEndMarker } from "./rq-end-marker";
import { RQMarker } from "./rq-marker";
import { SMarker } from "./s-marker";
import { SCEndMarker } from "./sc-end-marker";
import { SCMarker } from "./sc-marker";
import { SIGEndMarker } from "./sig-end-marker";
import { SIGMarker } from "./sig-marker";
import { SLSEndMarker } from "./sls-end-marker";
import { SLSMarker } from "./sls-marker";
import { SPMarker } from "./sp-marker";
import { SUPEndMarker } from "./sup-end-marker";
import { SUPMarker } from "./sup-marker";
import { TextBlock } from "./text-block";
import { TLEndMarker } from "./tl-end-marker";
import { TLMarker } from "./tl-marker";
import { VAEndMarker } from "./va-end-marker";
import { VAMarker } from "./va-marker";
import { VPEndMarker } from "./vp-end-marker";
import { VPMarker } from "./vp-marker";
import { WEndMarker } from "./w-end-marker";
import { WMarker } from "./w-marker";
import { WAEndMarker } from "./wa-end-marker";
import { WAMarker } from "./wa-marker";
import { WGEndMarker } from "./wg-end-marker";
import { WGMarker } from "./wg-marker";
import { WHEndMarker } from "./wh-end-marker";
import { WHMarker } from "./wh-marker";
import { WJEndMarker } from "./wj-end-marker";
import { WJMarker } from "./wj-marker";
import { XEndMarker } from "./x-end-marker";
import { XMarker } from "./x-marker";

export class VMarker extends Marker {
  private static verseRegex: RegExp = /^ *([0-9]*-?[0-9]*) ?(.*)/;

  public verseNumber: string;
  public startingVerse: number;
  public endingVerse: number;

  public getIdentifier(): string {
    return "v";
  }

  public preProcess(input: string): string {
    const matches = input.match(VMarker.verseRegex);
    if (matches) {
      this.verseNumber = matches[1];

      if (!Marker.isNullOrWhiteSpace(this.verseNumber)) {
        const verseBridgeChars = this.verseNumber.split("-");
        this.startingVerse = parseInt(verseBridgeChars[0], 10);
        this.endingVerse =
          verseBridgeChars.length > 1 &&
          !Marker.isNullOrWhiteSpace(verseBridgeChars[1])
            ? parseInt(verseBridgeChars[1], 10)
            : this.startingVerse;
      }

      return matches[2] || "";
    }
    return "";
  }

  public getVerseCharacter(): string {
    const firstCharacterMarker = this.getChildMarkers(VPMarker);
    if (firstCharacterMarker.length > 0) {
      const marker = firstCharacterMarker[0] as VPMarker;
      return marker.verseCharacter;
    } else {
      return this.verseNumber;
    }
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [
      VPMarker,
      VPEndMarker,
      TLMarker,
      TLEndMarker,
      ADDMarker,
      ADDEndMarker,
      BMarker,
      BKMarker,
      BKEndMarker,
      BDMarker,
      BDEndMarker,
      ITMarker,
      ITEndMarker,
      EMMarker,
      EMEndMarker,
      BDITMarker,
      BDITEndMarker,
      SUPMarker,
      SUPEndMarker,
      NOMarker,
      NOEndMarker,
      SCMarker,
      SCEndMarker,
      NDMarker,
      NDEndMarker,
      QMarker,
      MMarker,
      FMarker,
      FEndMarker,
      FRMarker,
      FREndMarker,
      SPMarker,
      TextBlock,
      WMarker,
      WEndMarker,
      XMarker,
      XEndMarker,
      CLSMarker,
      RQMarker,
      RQEndMarker,
      PIMarker,
      MIMarker,
      QSMarker,
      QSEndMarker,
      QRMarker,
      QCMarker,
      QDMarker,
      QACMarker,
      QACEndMarker,
      SMarker,
      VAMarker,
      VAEndMarker,
      KMarker,
      KEndMarker,
      LFMarker,
      LIKMarker,
      LIKEndMarker,
      LITLMarker,
      LITLEndMarker,
      LIVMarker,
      LIVEndMarker,
      ORDMarker,
      ORDEndMarker,
      PMCMarker,
      PMOMarker,
      PMRMarker,
      PNMarker,
      PNEndMarker,
      PNGMarker,
      PNGEndMarker,
      PRMarker,
      QTMarker,
      QTEndMarker,
      RBMarker,
      RBEndMarker,
      SIGMarker,
      SIGEndMarker,
      SLSMarker,
      SLSEndMarker,
      WAMarker,
      WAEndMarker,
      WGMarker,
      WGEndMarker,
      WHMarker,
      WHEndMarker,
      WJMarker,
      WJEndMarker,
      FIGMarker,
      FIGEndMarker,
      PNMarker,
      PNEndMarker,
      PROMarker,
      PROEndMarker,
      REMMarker,
      PMarker,
      LIMarker,
    ];
  }

  public tryInsert(input: Marker): boolean {
    if (input instanceof VMarker) {
      return false;
    }

    if (input instanceof QMarker && (input as QMarker).isPoetryBlock) {
      return false;
    }

    return super.tryInsert(input);
  }
}
