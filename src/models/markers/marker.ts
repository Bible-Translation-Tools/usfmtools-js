export abstract class Marker {
  public contents: Marker[] = [];
  public position: number;

  public constructor() {
    this.contents = [];
  }

  public getIdentifier(): string {
    return "";
  }

  /**
   * @return string[]
   */
  public getAllowedContents(): string[] {
    return [];
  }

  /**
   * Pre-process the text contents before creating text elements inside of it
   * @param input
   * @return string
   */
  public preProcess(input: string): string {
    return input;
  }

  public tryInsert(input: Marker): boolean {
    if (
      this.contents.length > 0 &&
      this.contents[this.contents.length - 1].tryInsert(input)
    ) {
      return true;
    }

    if (this.getAllowedContents().includes(input.constructor.name)) {
      this.contents.push(input);
      return true;
    }
    return false;
  }

  /**
   * @return string[]
   */
  public getTypesPathToLastMarker(): string[] {
    const types: string[] = [];
    types.push(this.constructor.name);
    if (this.contents.length > 0) {
      types.push(
        ...this.contents[this.contents.length - 1].getTypesPathToLastMarker()
      );
    }
    return types;
  }

  /**
   * @param target
   * @return Marker[]
   */
  public getHierarchyToMarker(target: Marker): Marker[] {
    const parents: [Marker, boolean][] = [];
    let childMarkerContentsCount = 0;

    let found = false;
    const stack: [Marker, boolean][] = [];
    stack.push([this, false]);

    while (stack.length > 0) {
      const [marker, isLastInParent] = stack.pop()!;
      if (marker === target) {
        found = true;
        break;
      }
      if (marker instanceof Marker && marker.contents.length > 0) {
        parents.push([marker, isLastInParent]);
        childMarkerContentsCount = marker.contents.length;
        for (let i = 0; i < childMarkerContentsCount; i++) {
          stack.push([marker.contents[i], i === 0]);
        }
      } else if (isLastInParent) {
        let [, isLast] = parents.pop()!;
        while (isLast) {
          [, isLast] = parents.pop()!;
        }
      }
    }

    if (!found) return [];
    const output: Marker[] = [];
    output.push(target);
    output.push(...parents.map((item) => item[0]));

    return output.reverse();
  }

  /**
   * Get the paths to multiple markers
   * @param targets
   * @return array{Marker, Marker[]}
   */
  public getHierarchyToMultipleMarkers(
    targets: Marker[]
  ): [Marker, Marker[]][] {
    const output: [Marker, Marker[]][] = [];
    const parents: [Marker, boolean][] = [];
    let childMarkerContentsCount = 0;

    const stack: [Marker, boolean][] = [];
    stack.push([this, false]);

    while (stack.length > 0) {
      const [marker, isLastInParent] = stack.pop()!;
      if (targets.includes(marker)) {
        let tmp: Marker[] = [marker];
        tmp.push(...parents.map((item) => item[0]));
        tmp = tmp.reverse();
        output.push([marker, tmp]);
        if (output.length === targets.length) {
          break;
        }
      }

      if (marker instanceof Marker && marker.contents.length > 0) {
        parents.push([marker, isLastInParent]);
        childMarkerContentsCount = marker.contents.length;
        for (let i = 0; i < childMarkerContentsCount; i++) {
          stack.push([marker.contents[i], i === 0]);
        }
      } else if (isLastInParent) {
        let [, isLast] = parents.pop()!;
        while (isLast) {
          [, isLast] = parents.pop()!;
        }
      }
    }

    for (const i of targets) {
      if (!output.some((item) => item[0] === i)) {
        output.push([i, []]);
      }
    }

    return output;
  }

  /**
   * A recursive search for children of a certain type
   * @param type
   * @param ignoredParents
   * @return Marker[]
   */
  public getChildMarkers(
    type: string,
    ignoredParents: string[] | null = null
  ): Marker[] {
    const output: Marker[] = [];
    const stack: Marker[] = [];

    if (ignoredParents && ignoredParents.includes(this.constructor.name)) {
      return output;
    }

    stack.push(this);

    while (stack.length > 0) {
      const marker = stack.pop()!;
      if (marker.constructor.name === type) {
        output.push(marker);
      }
      for (const child of marker.contents) {
        if (
          !ignoredParents ||
          !ignoredParents.includes(child.constructor.name)
        ) {
          stack.push(child);
        }
      }
    }

    return output.reverse();
  }

  /**
   * @return Marker
   */
  public getLastDescendent(): Marker {
    if (this.contents.length === 0) return this;

    return this.contents[this.contents.length - 1].getLastDescendent();
  }

  public static isNullOrWhiteSpace(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === "";
  }
}
