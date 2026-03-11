import { Marker } from "./marker";
export declare class BKMarker extends Marker {
    bookTitle: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
