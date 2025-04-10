import { Marker } from "./marker";
export declare class PROMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
