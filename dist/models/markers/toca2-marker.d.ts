import { Marker } from "./marker";
export declare class TOCA2Marker extends Marker {
    altShortTableOfContentsText: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
