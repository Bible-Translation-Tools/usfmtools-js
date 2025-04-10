import { Marker } from "./marker";
export declare class MSMarker extends Marker {
    weight: number;
    heading: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
