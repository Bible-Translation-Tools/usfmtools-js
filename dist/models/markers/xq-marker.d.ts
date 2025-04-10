import { Marker } from "./marker";
/**
 * A quotation from the scripture text
 */
export declare class XQMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
