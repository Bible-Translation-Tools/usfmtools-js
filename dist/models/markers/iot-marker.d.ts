import { Marker } from "./marker";
export declare class IOTMarker extends Marker {
    title: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
