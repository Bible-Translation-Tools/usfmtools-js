import { Marker } from "./marker";
import { MRMarker } from "./mr-marker";

export class MSMarker extends Marker {
  public weight: number = 1;
  public heading: string;

  public getIdentifier(): string {
    return "ms";
  }

  public preProcess(input: string): string {
    this.heading = input.trimStart();
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [MRMarker];
  }
}
