import { Marker } from "./marker";
export declare class TRMarker extends Marker {
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
