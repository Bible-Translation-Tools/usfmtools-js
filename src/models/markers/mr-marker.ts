import { Marker } from "./marker";
import { FMarker } from "./f-marker";
import { FEndMarker } from "./f-end-marker";

/**
 * Major section reference marker
 */
export class MRMarker extends Marker {
  public weight: number = 1;
  public sectionReference: string;

  public getIdentifier(): string {
    return "mr";
  }

  public preProcess(input: string): string {
    this.sectionReference = input.trimStart();
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [FMarker, FEndMarker];
  }
}
