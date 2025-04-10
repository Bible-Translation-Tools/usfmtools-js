import { Marker } from "./marker";
export declare class IQMarker extends Marker {
    depth: number;
    text: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
