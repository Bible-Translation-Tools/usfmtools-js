export declare abstract class Marker {
    contents: Marker[];
    position: number;
    constructor();
    getIdentifier(): string;
    /**
     * @return string[]
     */
    getAllowedContents(): string[];
    /**
     * Pre-process the text contents before creating text elements inside of it
     * @param input
     * @return string
     */
    preProcess(input: string): string;
    tryInsert(input: Marker): boolean;
    /**
     * @return string[]
     */
    getTypesPathToLastMarker(): string[];
    /**
     * @param target
     * @return Marker[]
     */
    getHierarchyToMarker(target: Marker): Marker[];
    /**
     * Get the paths to multiple markers
     * @param targets
     * @return array{Marker, Marker[]}
     */
    getHierarchyToMultipleMarkers(targets: Marker[]): [Marker, Marker[]][];
    /**
     * A recursive search for children of a certain type
     * @param type
     * @param ignoredParents
     * @return Marker[]
     */
    getChildMarkers(type: string, ignoredParents?: string[] | null): Marker[];
    /**
     * @return Marker
     */
    getLastDescendent(): Marker;
    static isNullOrWhiteSpace(str: string | null | undefined): boolean;
}
