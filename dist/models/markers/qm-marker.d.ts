import { Marker } from "./marker";
export declare class QMMarker extends Marker {
    depth: number;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
