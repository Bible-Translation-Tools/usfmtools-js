import { Marker } from "./marker";
export declare class TOCA3Marker extends Marker {
    altBookAbbreviation: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
