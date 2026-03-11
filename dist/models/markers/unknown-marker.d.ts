import { Marker } from "./marker";
export declare class UnknownMarker extends Marker {
    parsedIdentifier: string;
    parsedValue: string;
    line: number;
    constructor();
    getIdentifier(): string;
    getRawValue(): string;
    getRawContents(): string;
    preProcess(input: string): string;
}
