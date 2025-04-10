export declare abstract class Marker {
    contents: Marker[];
    position: number;
    constructor();
    getIdentifier(): string;
    /**
     * @return string[]
     */
    getAllowedContents(): (new (...args: any[]) => Marker)[];
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
    getTypesPathToLastMarker(): (new (...args: any[]) => Marker)[];
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
    getChildMarkers<T extends Marker>(type: new (...args: any[]) => T, ignoredParents?: (new (...args: any[]) => Marker)[] | null): T[];
    /**
     * @return Marker
     */
    getLastDescendent(): Marker;
    static isNullOrWhiteSpace(str: string | null | undefined): boolean;
}
