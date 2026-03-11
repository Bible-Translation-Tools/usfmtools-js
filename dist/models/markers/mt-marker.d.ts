import { Marker } from "./marker";
export declare class MTMarker extends Marker {
    weight: number;
    title: string;
    getIdentifier(): string;
    getRawValue(): string;
    preProcess(input: string): string;
}
