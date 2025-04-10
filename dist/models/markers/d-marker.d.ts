import { Marker } from "./marker";
export declare class DMarker extends Marker {
    description: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
