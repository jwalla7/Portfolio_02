import { Track } from "@audius/sdk/dist/api/Track";

class TrackNode<T> {
    key: string;
    value: T;
    prev: TrackNode<T> | null = null;
    next: TrackNode<T> | null = null;

    constructor(key: string, value: T) {
        this.key = key;
        this.value = value;
    }
}

export interface LRUCacheProps {
    key: string;
    track: Track;
    streamLink: string;
}
export class LRUCache<T> {
    private capacity: number;
    private hash: Map<string, TrackNode<T>>;
    private head: TrackNode<T> | null = null;
    private tail: TrackNode<T> | null = null;
    private currentNode: TrackNode<T> | null = null;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.hash = new Map<string, TrackNode<T>>();
    }

    put(key: string, value: T): void {
        let node = this.hash.get(key);
        if (node) {
            node.value = value;
            this.moveToHead(node);
        } else {
            node = new TrackNode(key, value);
            this.hash.set(key, node);
            this.addToHead(node);

            if (this.hash.size >= this.capacity) {
                this.removeTail();
            }
        }
    }

    get(key: string): T | null {
        const node = this.hash.get(key);
        if (node) {
            this.moveToHead(node);
            this.currentNode = node;
            return node.value;
        }
        return null;
    }

    getAllKeys(): string[] {
        return Array.from(this.hash.keys());
    }

    getCurrentNodeValue(): T | null {
        return this.currentNode?.value || null;
    }

    setCurrentNode(key: string): void {
        const node = this.hash.get(key);
        if (node) {
            this.currentNode = node;
        }
    }

    getNextNode(currentKey: string): T | null {
        // If the cache is empty, return null
        if (!this.head) return null;
        // Find the current node in the hash
        const currentNode = this.hash.get(currentKey);
        // If the current node is found and it has a next node, return the next node's value
        if (currentNode && currentNode.next) {
            return currentNode.next.value;
        }
        // If there's no next node, return null
        return null;
    }

    getPreviousNode(currentKey: string): T | null {
        // If the cache is empty, return null
        if (!this.head) return null;
        // Find the current node in the hash
        const currentNode = this.hash.get(currentKey);
        // If the current node is found and it has a previous node, return the previous node's value
        if (currentNode && currentNode.prev) {
            return currentNode.prev.value;
        }
        // If there's no previous node, return null
        return null;
    }

    getTailNode(): T | null {
        return this.tail?.value || null;
    }

    private addToHead(node: TrackNode<T>): void {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            if (this.head) {
                this.head.prev = node;
            }
            this.head = node;
        }
    }

    private removeTail(): void {
        if (this.tail) {
            this.hash.delete(this.tail.key);
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                if (this.tail) {
                    this.tail.next = null;
                }
            }
        }
    }

    private removeNodeByKey(key: string): void {
        const node = this.hash.get(key);
        if (!node) {
            return;
        }

        // Remove node from the doubly linked list
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            // Node is the head
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            // Node is the tail
            this.tail = node.prev;
        }

        // Remove node from the hash map
        this.hash.delete(key);
    }

    private moveToHead(node: TrackNode<T>): void {
        if (node === this.head) return;

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;

        if (node === this.tail) {
            this.tail = node.prev;
        }
    }

    private addToTail(node: TrackNode<T>): void {
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    moveToTail(key: string): void {
        const node = this.hash.get(key);
        if (node === this.tail) return;
        if (node) {
            if (node.prev) node.prev.next = node.next;
            if (node.next) node.next.prev = node.prev;
            else this.tail = node.prev;

            if (!this.tail) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
            node.next = null;
        }
    }
}
