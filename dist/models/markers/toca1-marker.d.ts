import { Marker } from "./marker";
export declare class TOCA1Marker extends Marker {
    altLongTableOfContentsText: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
