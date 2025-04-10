import { Marker } from "./marker";
export declare class FRMarker extends Marker {
    verseReference: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
