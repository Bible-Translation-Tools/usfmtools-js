import { Marker } from "./marker";
export declare class WJMarker extends Marker {
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
