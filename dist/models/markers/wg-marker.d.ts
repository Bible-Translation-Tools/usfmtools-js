import { Marker } from "./marker";
export declare class WGMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
