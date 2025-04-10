import { Marker } from "./marker";
export declare class HMarker extends Marker {
    headerText: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
