import { Marker } from "./marker";
export declare class HMarker extends Marker {
    headerText: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
