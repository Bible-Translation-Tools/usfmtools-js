import { Marker } from "./marker";
export declare class TOCA1Marker extends Marker {
    altLongTableOfContentsText: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
