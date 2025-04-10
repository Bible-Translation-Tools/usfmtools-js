import { Marker } from "./marker";
export declare class BDMarker extends Marker {
    text: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
