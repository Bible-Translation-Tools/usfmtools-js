import { Marker } from "./marker";
export declare class FPMarker extends Marker {
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
