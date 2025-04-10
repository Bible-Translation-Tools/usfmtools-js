import { Marker } from "./markers/marker";

/**
 * A holder class to take the place of a tuple
 */
export class ConvertToMarkerResult {
  public marker: Marker;
  public remainingText: string;

  public constructor(marker: Marker, remainingText: string) {
    this.marker = marker;
    this.remainingText = remainingText;
  }
}
