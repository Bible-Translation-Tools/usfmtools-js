import { Marker } from "./marker";
/**
 * A speaker Marker (Used mostly in Job and Songs of Solomon)
 */
export declare class SPMarker extends Marker {
    speaker: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
}
