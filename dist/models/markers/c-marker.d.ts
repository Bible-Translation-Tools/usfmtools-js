import { Marker } from "./marker";
export declare class CMarker extends Marker {
    private static regex;
    number: number;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    getPublishedChapterMarker(): string;
    customChapterLabel(): string;
}
