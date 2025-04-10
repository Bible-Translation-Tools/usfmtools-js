import { Marker } from "./marker";
import { TextBlock } from "./text-block";
import { IORMarker } from "./ior-marker";
import { IOREndMarker } from "./ior-end-marker";

export class IOMarker extends Marker {
  public depth: number = 1;

  public getIdentifier(): string {
    return "io";
  }

  public getAllowedContents(): string[] {
    return [TextBlock.name, IORMarker.name, IOREndMarker.name];
  }
}
