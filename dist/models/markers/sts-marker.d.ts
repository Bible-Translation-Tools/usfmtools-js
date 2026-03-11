import { Marker } from "./marker";
export declare class STSMarker extends Marker {
    statusText: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
