import { Marker } from "./marker";
export declare class SMarker extends Marker {
    weight: number;
    text: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
