import { Marker } from "./marker";
export declare class TextBlock extends Marker {
    text: string;
    constructor(text: string);
    getIdentifier(): string;
}
