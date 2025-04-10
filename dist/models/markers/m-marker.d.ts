import { Marker } from "./marker";
export declare class MMarker extends Marker {
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
