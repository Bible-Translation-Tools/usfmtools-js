import { Marker } from "./marker";
export declare class CLMarker extends Marker {
    label: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
