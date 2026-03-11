import { Marker } from "./marker";
export declare class XMarker extends Marker {
    crossRefCaller: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    isValid(): boolean;
}
