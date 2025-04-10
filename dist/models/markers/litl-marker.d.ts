import { Marker } from "./marker";
export declare class LITLMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
