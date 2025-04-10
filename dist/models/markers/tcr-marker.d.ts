import { Marker } from "./marker";
export declare class TCRMarker extends Marker {
    columnPosition: number;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
