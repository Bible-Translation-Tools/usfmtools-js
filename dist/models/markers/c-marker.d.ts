import { Marker } from "./marker";
export declare class CMarker extends Marker {
    private static regex;
    number: number;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    isValid(): boolean;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    getPublishedChapterMarker(): string;
    customChapterLabel(): string;
}
