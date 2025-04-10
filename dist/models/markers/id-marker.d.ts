import { Marker } from "./marker";
export declare class IDMarker extends Marker {
    textIdentifier: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
