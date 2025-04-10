import { Marker } from "./marker";
/**
 * Alternate chapter number
 */
export declare class CAMarker extends Marker {
    altChapterNumber: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
