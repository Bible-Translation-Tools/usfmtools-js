import { Marker } from "./marker";
export declare class DMarker extends Marker {
    description: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
