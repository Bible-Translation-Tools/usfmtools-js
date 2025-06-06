import { Marker } from "./marker";
import { TCMarker } from "./tc-marker";
import { TCRMarker } from "./tcr-marker";
import { THMarker } from "./th-marker";
import { THRMarker } from "./thr-marker";

export class TRMarker extends Marker {
  public getIdentifier(): string {
    return "tr";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TCMarker, THMarker, TCRMarker, THRMarker];
  }
}
