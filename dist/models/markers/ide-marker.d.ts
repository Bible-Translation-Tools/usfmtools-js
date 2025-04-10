import { Marker } from "./marker";
export declare class IDEMarker extends Marker {
    encoding: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
