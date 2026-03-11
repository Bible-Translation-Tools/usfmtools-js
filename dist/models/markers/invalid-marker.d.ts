import { Marker } from "./marker";
export declare class InvalidMarker extends Marker {
    parsedIdentifier: string;
    parsedValue: string;
    line: number;
    constructor();
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
