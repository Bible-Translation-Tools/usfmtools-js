import { Marker } from "./marker";
/**
 * Normal Text
 */
export declare class KMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
