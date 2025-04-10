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
    const firstCharacterMarker = this.getChildMarkers(VPMarker.name);
    if (firstCharacterMarker.length > 0) {
      const marker = firstCharacterMarker[0] as VPMarker;
      return marker.verseCharacter;
    } else {
      return this.verseNumber;
    }
  }

  public getAllowedContents(): string[] {
    return [
      VPMarker.name,
      VPEndMarker.name,
      TLMarker.name,
      TLEndMarker.name,
      ADDMarker.name,
      ADDEndMarker.name,
      BMarker.name,
      BKMarker.name,
      BKEndMarker.name,
      BDMarker.name,
      BDEndMarker.name,
      ITMarker.name,
      ITEndMarker.name,
      EMMarker.name,
      EMEndMarker.name,
      BDITMarker.name,
      BDITEndMarker.name,
      SUPMarker.name,
      SUPEndMarker.name,
      NOMarker.name,
      NOEndMarker.name,
      SCMarker.name,
      SCEndMarker.name,
      NDMarker.name,
      NDEndMarker.name,
      QMarker.name,
      MMarker.name,
      FMarker.name,
      FEndMarker.name,
      FRMarker.name,
      FREndMarker.name,
      SPMarker.name,
      TextBlock.name,
      WMarker.name,
      WEndMarker.name,
      XMarker.name,
      XEndMarker.name,
      CLSMarker.name,
      RQMarker.name,
      RQEndMarker.name,
      PIMarker.name,
      MIMarker.name,
      QSMarker.name,
      QSEndMarker.name,
      QRMarker.name,
      QCMarker.name,
      QDMarker.name,
      QACMarker.name,
      QACEndMarker.name,
      SMarker.name,
      VAMarker.name,
      VAEndMarker.name,
      KMarker.name,
      KEndMarker.name,
      LFMarker.name,
      LIKMarker.name,
      LIKEndMarker.name,
      LITLMarker.name,
      LITLEndMarker.name,
      LIVMarker.name,
      LIVEndMarker.name,
      ORDMarker.name,
      ORDEndMarker.name,
      PMCMarker.name,
      PMOMarker.name,
      PMRMarker.name,
      PNMarker.name,
      PNEndMarker.name,
      PNGMarker.name,
      PNGEndMarker.name,
      PRMarker.name,
      QTMarker.name,
      QTEndMarker.name,
      RBMarker.name,
      RBEndMarker.name,
      SIGMarker.name,
      SIGEndMarker.name,
      SLSMarker.name,
      SLSEndMarker.name,
      WAMarker.name,
      WAEndMarker.name,
      WGMarker.name,
      WGEndMarker.name,
      WHMarker.name,
      WHEndMarker.name,
      WJMarker.name,
      WJEndMarker.name,
      FIGMarker.name,
      FIGEndMarker.name,
      PNMarker.name,
      PNEndMarker.name,
      PROMarker.name,
      PROEndMarker.name,
      REMMarker.name,
      PMarker.name,
      LIMarker.name,
    ];
  }

  public tryInsert(input: Marker): boolean {
    if (input.constructor.name === VMarker.name) {
      return false;
    }

    if (
      input.constructor.name === QMarker.name &&
      (input as QMarker).isPoetryBlock
    ) {
      return false;
    }

    return super.tryInsert(input);
  }
}
