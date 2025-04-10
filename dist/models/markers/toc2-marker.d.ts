import { Marker } from "./marker";
export declare class TOC2Marker extends Marker {
    shortTableOfContentsText: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
