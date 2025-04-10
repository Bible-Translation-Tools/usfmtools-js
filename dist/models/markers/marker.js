"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
class Marker {
    constructor() {
        this.contents = [];
        this.contents = [];
    }
    getIdentifier() {
        return "";
    }
    /**
     * @return string[]
     */
    getAllowedContents() {
        return [];
    }
    /**
     * Pre-process the text contents before creating text elements inside of it
     * @param input
     * @return string
     */
    preProcess(input) {
        return input;
    }
    tryInsert(input) {
        if (this.contents.length > 0 &&
            this.contents[this.contents.length - 1].tryInsert(input)) {
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
    getTypesPathToLastMarker() {
        const types = [];
        types.push(this.constructor);
        if (this.contents.length > 0) {
            types.push(...this.contents[this.contents.length - 1].getTypesPathToLastMarker());
        }
        return types;
    }
    /**
     * @param target
     * @return Marker[]
     */
    getHierarchyToMarker(target) {
        const parents = [];
        let childMarkerContentsCount = 0;
        let found = false;
        const stack = [];
        stack.push([this, false]);
        while (stack.length > 0) {
            const [marker, isLastInParent] = stack.pop();
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
            }
            else if (isLastInParent) {
                let [, isLast] = parents.pop();
                while (isLast) {
                    [, isLast] = parents.pop();
                }
            }
        }
        if (!found)
            return [];
        const output = [];
        output.push(target);
        output.push(...parents.map((item) => item[0]));
        return output.reverse();
    }
    /**
     * Get the paths to multiple markers
     * @param targets
     * @return array{Marker, Marker[]}
     */
    getHierarchyToMultipleMarkers(targets) {
        const output = [];
        const parents = [];
        let childMarkerContentsCount = 0;
        const stack = [];
        stack.push([this, false]);
        while (stack.length > 0) {
            const [marker, isLastInParent] = stack.pop();
            if (targets.includes(marker)) {
                let tmp = [marker];
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
            }
            else if (isLastInParent) {
                let [, isLast] = parents.pop();
                while (isLast) {
                    [, isLast] = parents.pop();
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
    getChildMarkers(type, ignoredParents = null) {
        const output = [];
        const stack = [];
        if (ignoredParents && ignoredParents.some((type) => this instanceof type)) {
            return output;
        }
        stack.push(this);
        while (stack.length > 0) {
            const marker = stack.pop();
            if (marker instanceof type) {
                output.push(marker);
            }
            for (const child of marker.contents) {
                if (!ignoredParents ||
                    !ignoredParents.some((type) => child instanceof type)) {
                    stack.push(child);
                }
            }
        }
        return output.reverse();
    }
    /**
     * @return Marker
     */
    getLastDescendent() {
        if (this.contents.length === 0)
            return this;
        return this.contents[this.contents.length - 1].getLastDescendent();
    }
    static isNullOrWhiteSpace(str) {
        return str === null || str === undefined || str.trim() === "";
    }
}
exports.Marker = Marker;
