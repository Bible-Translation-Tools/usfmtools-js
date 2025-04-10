import { Marker } from "./marker";
export declare class CMarker extends Marker {
    private static regex;
    number: number;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
    getPublishedChapterMarker(): string;
    customChapterLabel(): string;
}
