import { Marker } from "./marker";
export declare class IDEMarker extends Marker {
    encoding: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    isValid(): boolean;
}
