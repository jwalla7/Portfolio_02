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

    constructor(capacity: number) {
        this.capacity = capacity;
        this.hash = new Map<string, TrackNode<T>>();
    }

    getAllKeys(): string[] {
        return Array.from(this.hash.keys());
    }

    get(key: string): T | null {
        const node = this.hash.get(key);
        if (node) {
            this.moveToHead(node);
            return node.value;
        }
        return null;
    }
    put(key: string, value: T): void {
        const node = this.hash.get(key);
        if (node) {
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new TrackNode(key, value);
            if (this.hash.size >= this.capacity) {
                this.removeNode();
            }
            this.addToFront(newNode);
            this.hash.set(key, newNode);
        }
    }

    private addToFront(node: TrackNode<T>): void {
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

    private removeNode(): void {
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
}
