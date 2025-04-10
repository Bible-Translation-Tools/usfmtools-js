import { Marker } from "./marker";
export declare class FIGMarker extends Marker {
    caption: string;
    description: string;
    width: string;
    location: string;
    copyright: string;
    reference: string;
    filePath: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
