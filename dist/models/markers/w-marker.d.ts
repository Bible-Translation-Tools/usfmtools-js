import { Marker } from "./marker";
/**
 * Wordlist / Glossary / Dictionary Entry Marker
 */
export declare class WMarker extends Marker {
    term: string;
    /**
     * @var array{string, string}
     */
    attributes: {
        [key: string]: string;
    };
    private static wordAttributePattern;
    getIdentifier(): string;
    preProcess(input: string): string;
    getAllowedContents(): (new (...args: any[]) => Marker)[];
}
