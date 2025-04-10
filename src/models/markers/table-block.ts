import { Marker } from "./marker";
import { TRMarker } from "./tr-marker";

export class TableBlock extends Marker {
  public getIdentifier(): string {
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TRMarker];
  }
}
