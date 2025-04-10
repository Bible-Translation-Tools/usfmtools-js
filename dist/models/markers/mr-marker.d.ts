import { Marker } from "./marker";
/**
 * Major section reference marker
 */
export declare class MRMarker extends Marker {
    weight: number;
    sectionReference: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
