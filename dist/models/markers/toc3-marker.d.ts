import { Marker } from "./marker";
export declare class TOC3Marker extends Marker {
    bookAbbreviation: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
