import { Marker } from "./marker";
export declare class CPMarker extends Marker {
    publishedChapterMarker: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
