import { Marker } from "./marker";
/**
 * Emphasis text
 */
export declare class EMMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
