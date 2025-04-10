import { Marker } from "./marker";
import { QACMarker } from "./qac-marker";
import { QACEndMarker } from "./qac-end-marker";

/**
 * Acrostic heading for poetry
 */
export class QAMarker extends Marker {
  public heading: string;

  public getIdentifier(): string {
    return "qa";
  }

  public preProcess(input: string): string {
    this.heading = input.trim();
    return "";
  }

  public getAllowedContents(): string[] {
    return [QACMarker.name, QACEndMarker.name];
  }
}
