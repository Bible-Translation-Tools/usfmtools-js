import { Marker } from "./marker";
export declare class XMarker extends Marker {
    crossRefCaller: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
