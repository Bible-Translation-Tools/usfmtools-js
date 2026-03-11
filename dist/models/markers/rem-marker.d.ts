import { Marker } from "./marker";
export declare class REMMarker extends Marker {
    comment: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
