import { Marker } from "./marker";
export declare class FKMarker extends Marker {
    footNoteKeyword: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
