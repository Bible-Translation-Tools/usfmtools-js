import { Marker } from "./markers/marker";
/**
 * A holder class to take the place of a tuple
 */
export declare class ConvertToMarkerResult {
    marker: Marker;
    remainingText: string;
    constructor(marker: Marker, remainingText: string);
}
