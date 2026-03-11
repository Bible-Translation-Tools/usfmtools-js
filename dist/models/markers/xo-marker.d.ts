import { Marker } from "./marker";
export declare class XOMarker extends Marker {
    originRef: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    isValid(): boolean;
}
