import { Marker } from "./marker";
export declare class UnknownMarker extends Marker {
    parsedIdentifier: string;
    parsedValue: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
