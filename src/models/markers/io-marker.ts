import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { IORMarker } from "./ior-marker";
import { IOREndMarker } from "./ior-end-marker";

export class IOMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "io";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock, IORMarker, IOREndMarker];
  }
}
