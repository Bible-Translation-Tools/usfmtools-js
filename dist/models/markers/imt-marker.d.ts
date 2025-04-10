import { Marker } from "./marker";
export declare class IMTMarker extends Marker {
    weight: number;
    introTitle: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
