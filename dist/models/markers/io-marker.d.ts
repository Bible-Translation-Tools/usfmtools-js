import { Marker } from "./marker";
export declare class IOMarker extends Marker {
    depth: number;
    getIdentifier(): string;
    getAllowedContents(): string[];
}
