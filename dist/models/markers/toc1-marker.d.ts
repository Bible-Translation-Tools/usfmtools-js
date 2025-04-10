import { Marker } from "./marker";
export declare class TOC1Marker extends Marker {
    longTableOfContentsText: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
