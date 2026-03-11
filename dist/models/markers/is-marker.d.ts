import { Marker } from "./marker";
export declare class ISMarker extends Marker {
    weight: number;
    heading: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
