import { Marker } from "./marker";
export declare class VMarker extends Marker {
    private static verseRegex;
    verseNumber: string;
    startingVerse: number;
    endingVerse: number;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    isValid(): boolean;
    getVerseCharacter(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    tryInsert(input: Marker): boolean;
}
