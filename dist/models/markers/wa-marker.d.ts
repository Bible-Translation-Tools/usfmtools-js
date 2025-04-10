import { Marker } from "./marker";
export declare class WAMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
