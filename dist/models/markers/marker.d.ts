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
    /**
     * Returns whether this marker has valid required values after preProcess.
     * Override in subclasses that require specific values (e.g., chapter number, verse number, caller).
     * @return boolean
     */
    isValid(): boolean;
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
    getHierarchyToMultipleMarkers(targets: Marker[]): Map<Marker, Marker[]>;
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
    /**
     * Returns the marker-specific data that appears after the identifier in raw USFM.
     * Override in subclasses that store data (e.g., verse number, footnote caller).
     * @return string
     */
    getRawValue(): string;
    /**
     * Returns the raw USFM string representation of this marker and all its children.
     * @return string
     */
    getRawContents(): string;
    static isNullOrWhiteSpace(str: string | null | undefined): boolean;
}
