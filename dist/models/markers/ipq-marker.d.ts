import { Marker } from "./marker";
export declare class IPQMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
