import { Marker } from "./marker";
/**
 * Hebrew note
 */
export declare class QDMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
