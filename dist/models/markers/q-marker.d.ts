import { Marker } from "./marker";
export declare class QMarker extends Marker {
    depth: number;
    text: string;
    isPoetryBlock: boolean;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): string[];
    tryInsert(input: Marker): boolean;
}
