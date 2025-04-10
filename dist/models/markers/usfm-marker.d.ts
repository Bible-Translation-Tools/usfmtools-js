import { Marker } from "./marker";
export declare class USFMMarker extends Marker {
    /**
     * Marker for USFM version
     */
    version: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
