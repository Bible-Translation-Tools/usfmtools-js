import { Marker } from "./marker";
export declare class TableBlock extends Marker {
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
