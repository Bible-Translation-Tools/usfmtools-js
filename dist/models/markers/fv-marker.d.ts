import { Marker } from "./marker";
export declare class FVMarker extends Marker {
    verseCharacter: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
