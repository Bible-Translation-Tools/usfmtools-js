import { Marker } from "./marker";
export declare class IOTMarker extends Marker {
    title: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
