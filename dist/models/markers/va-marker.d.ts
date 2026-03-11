import { Marker } from "./marker";
export declare class VAMarker extends Marker {
    altVerseNumber: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
