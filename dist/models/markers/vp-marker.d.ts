import { Marker } from "./marker";
export declare class VPMarker extends Marker {
    verseCharacter: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
