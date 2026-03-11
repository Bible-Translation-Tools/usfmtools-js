import { USFMDocument } from "./models/markers/usfm-document";
export declare class USFMParser {
    /** @var array|string[] */
    private ignoredTags;
    private ignoreUnknownMarkers;
    private static splitRegex;
    /**
     * @param ?string[] $tagsToIgnore
     * @param bool $ignoreUnknownMarkers
     */
    constructor(tagsToIgnore?: string[] | null, ignoreUnknownMarkers?: boolean);
    /**
     * Parses a string into a USFMDocument
     * @param string $input A USFM string
     * @return USFMDocument A USFMDocument representing the input
     */
    parseFromString(input: string): USFMDocument;
    /**
     * Removes all the unnecessary whitespace while preserving space between closing markers and opening markers
     * @param (Marker|USFMDocument)[] $input
     * @return (Marker|USFMDocument)[]
     */
    private cleanWhitespace;
    /**
     * Generate a list of Markers from a string
     * @param string $input USFM String to tokenize
     * @return (Marker|USFMDocument)[] A List of Markers based upon the string
     */
    private tokenizeFromString;
    /**
     * @param string $identifier
     * @param string $value
     * @return ConvertToMarkerResult
     */
    private convertToMarker;
    /**
     * @param string $identifier
     * @return Marker
     */
    private selectMarker;
}
