import { Marker } from "./marker";
export declare class TOC1Marker extends Marker {
    longTableOfContentsText: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
