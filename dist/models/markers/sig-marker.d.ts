import { Marker } from "./marker";
export declare class SIGMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
