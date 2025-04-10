import { Marker } from "./marker";
export declare class MTMarker extends Marker {
    weight: number;
    title: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
