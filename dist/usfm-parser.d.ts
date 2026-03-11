import { USFMDocument } from "./models/markers/usfm-document";
export declare class USFMParser {
    /** @var array|string[] */
    private readonly ignoredTags;
    private readonly ignoreUnknownMarkers;
    private readonly ignoreInvalidMarkers;
    private static splitRegex;
    /**
     * @param tagsToIgnore
     * @param ignoreUnknownMarkers
     * @param ignoreInvalidMarkers
     */
    constructor(tagsToIgnore?: string[] | null, ignoreUnknownMarkers?: boolean, ignoreInvalidMarkers?: boolean);
    /**
     * Parses a string into a USFMDocument
     * @param input A USFM string
     * @return USFMDocument A USFMDocument representing the input
     */
    parseFromString(input: string): USFMDocument;
    /**
     * Removes all the unnecessary whitespace while preserving space between closing markers and opening markers
     * @param input
     * @return (Marker|USFMDocument)[]
     */
    private cleanWhitespace;
    /**
     * Generate a list of Markers from a string
     * @param input USFM String to tokenize
     * @return (Marker|USFMDocument)[] A List of Markers based upon the string
     */
    private tokenizeFromString;
    /**
     * @param identifier
     * @param value
     * @return ConvertToMarkerResult
     */
    private convertToMarker;
    /**
     * Calculate the line number (1-based) from a position in the input string
     * @param position
     * @param input
     * @return number
     */
    private calculateLineNumber;
    /**
     * @param identifier
     * @return Marker
     */
    private selectMarker;
}
