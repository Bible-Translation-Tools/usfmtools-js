import { Marker } from "./marker";
export declare class THRMarker extends Marker {
    columnPosition: number;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
