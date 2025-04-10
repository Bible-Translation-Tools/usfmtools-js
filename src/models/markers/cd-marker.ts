import { Marker } from "./marker";
import { TextBlock } from "./text-block";

export class CDMarker extends Marker {
  public description: string;

  public getIdentifier(): string {
    return "cd";
  }

  public preProcess(input: string): string {
    this.description = input;
    return "";
  }

  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
    return [TextBlock];
  }
}
