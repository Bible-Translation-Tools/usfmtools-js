import { Marker } from "./marker";
export declare class USFMDocument extends Marker {
    contents: (Marker | USFMDocument)[];
    getIdentifier(): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
    constructor();
    insert(input: Marker | USFMDocument): void;
    insertMarker(input: Marker): void;
    insertDocument(document: USFMDocument): void;
    insertMultiple(input: (Marker | USFMDocument)[]): void;
}
