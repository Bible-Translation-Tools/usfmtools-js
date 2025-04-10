import { Marker } from "./marker";
export declare class QACMarker extends Marker {
    acrosticLetter: string;
    getIdentifier(): string;
    preProcess(input: string): string;
}
