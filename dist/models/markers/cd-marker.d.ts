import { Marker } from "./marker";
export declare class CDMarker extends Marker {
    description: string;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
