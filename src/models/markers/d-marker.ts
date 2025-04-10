import { Marker } from "./marker";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";
import { ITMarker } from "./it-marker";
import { ITEndMarker } from "./it-end-marker";
import { TextBlock } from "./text-block";

export class DMarker extends Marker {
  public description: string;

  public getIdentifier(): string {
    return "d";
  }

  public preProcess(input: string): string {
    this.description = input.trim();
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [FMarker, FEndMarker, ITMarker, ITEndMarker, TextBlock];
  }
}
