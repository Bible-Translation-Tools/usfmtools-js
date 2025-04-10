import { Marker } from "./marker";
/**
 * Acrostic heading for poetry
 */
export declare class QAMarker extends Marker {
    heading: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
