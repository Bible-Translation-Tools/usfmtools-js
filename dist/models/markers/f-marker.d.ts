import { Marker } from "./marker";
export declare class FMarker extends Marker {
    footNoteCaller: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
