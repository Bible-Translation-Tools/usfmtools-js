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
  public getAllowedContents(): (new (...args: any[]) => Marker)[] {
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

    if (this.getAllowedContents().some((type) => input instanceof type)) {
      this.contents.push(input);
      return true;
    }
    return false;
  }

  /**
   * @return string[]
   */
  public getTypesPathToLastMarker(): (new (...args: any[]) => Marker)[] {
    const types: (new (...args: any[]) => Marker)[] = [];
    types.push(this.constructor as new (...args: any[]) => Marker);
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
  ): Map<Marker, Marker[]> {
    if (targets.length === 0) {
      return new Map<Marker, Marker[]>();
    }
    if (this.contents.length === 0) {
      const output = new Map<Marker, Marker[]>();
      for (const target of targets) {
        output.set(target, []);
      }
      return output;
    }

    const output = new Map<Marker, Marker[]>();
    const parents: { marker: Marker; isLastInParent: boolean }[] = [];
    let childMarkerContentsCount: number;

    const stack: { marker: Marker; isLastInParent: boolean }[] = [];
    stack.push({ marker: this, isLastInParent: false });

    // Use a Set for faster lookups in targets
    const targetSet = new Set(targets);

    while (stack.length > 0) {
      const { marker, isLastInParent } = stack.pop()!;

      if (targetSet.has(marker)) {
        const tmp: Marker[] = [marker];
        for (const parent of parents) {
          tmp.push(parent.marker);
        }
        tmp.reverse();
        output.set(marker, tmp);
        if (output.size === targets.length) {
          break;
        }
      }

      if (marker.contents && marker.contents.length > 0) {
        // We're descending
        parents.push({ marker, isLastInParent });

        childMarkerContentsCount = marker.contents.length;
        for (let i = childMarkerContentsCount - 1; i >= 0; i--) {
          // Corrected: last child is when i === 0 in reverse iteration
          stack.push({ marker: marker.contents[i], isLastInParent: i === 0 });
        }
      } else if (stack.length === 0 || isLastInParent) {
        // We're ascending
        if (parents.length > 0) {
          let tmp = parents.pop()!;
          // keep moving up the parent stack until we aren't the last in a parent
          while (tmp && tmp.isLastInParent === true && parents.length > 0) {
            tmp = parents.pop()!;
          }
        }
      }
    }

    // Ensure all targets are in the output
    for (const target of targets) {
      if (!output.has(target)) {
        output.set(target, []);
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
  public getChildMarkers<T extends Marker>(
    type: new (...args: any[]) => T,
    ignoredParents: (new (...args: any[]) => Marker)[] | null = null
  ): T[] {
    const output: T[] = [];
    const stack: Marker[] = [];

    if (ignoredParents && ignoredParents.some((type) => this instanceof type)) {
      return output;
    }

    stack.push(this);

    while (stack.length > 0) {
      const marker = stack.pop()!;
      if (marker instanceof type) {
        output.push(marker as T);
      }
      for (const child of marker.contents) {
        if (
          !ignoredParents ||
          !ignoredParents.some((type) => child instanceof type)
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
