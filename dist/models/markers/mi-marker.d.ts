import { Marker } from "./marker";
export declare class MIMarker extends Marker {
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
