import { Marker } from "./marker";
export declare class TOCA3Marker extends Marker {
    altBookAbbreviation: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
