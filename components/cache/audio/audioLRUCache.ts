import { Track } from "@audius/sdk/dist/api/Track";

class TrackNode<T> {
    id: string;
    value: T;
    prev: TrackNode<T> | null = null;
    next: TrackNode<T> | null = null;

    constructor(id: string, value: T) {
        this.id = id;
        this.value = value;
    }
}

export interface LRUCacheProps {
    id: string;
    track: Track;
    streamLink: string;
    artwork: {
        _150x150: string;
        _480x480: string;
        _1000x1000: string;
    };
    user: {
        profilePicture: {
            _150x150: string;
            _480x480: string;
            _1000x1000: string;
        };
        name: string;
    };
    title: string;
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

    put(id: string, value: T): void {
        let node = this.hash.get(id);
        if (node) {
            node.value = value;
            this.moveToHead(node);
        } else {
            node = new TrackNode(id, value);
            this.hash.set(id, node);
            this.addToHead(node);

            if (this.hash.size > this.capacity) {
                this.removeTail();
            }
        }
        this.currentNode = node;
    }

    get(id: string): T | null {
        const node = this.hash.get(id);
        if (node) {
            this.moveToHead(node);
            this.currentNode = node;
            return node.value;
        }
        return null;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    private addToHead(node: TrackNode<T>): void {
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    public removeTail(): void {
        if (this.tail) {
            this.hash.delete(this.tail.id);
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.prev;
                if (this.tail) this.tail.next = null;
            }
        }
    }

    private removeNodeByKey(id: string): void {
        const node = this.hash.get(id);
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
        this.hash.delete(id);
    }

    private moveToHead(node: TrackNode<T>): void {
        if (node === this.head) return;

        // Detach node from current position
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        // If the node is the tail, update the tail
        if (node === this.tail) {
            this.tail = node.prev;
        }
        // Place node at head
        node.prev = null;
        node.next = this.head;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
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

    moveToTail(id: string): void {
        const node = this.hash.get(id);
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

    getAllKeys(): string[] {
        return Array.from(this.hash.keys());
    }

    getCurrentNodeValue(): T | null {
        return this.currentNode?.value || null;
    }

    setCurrentNode(id: string): void {
        const node = this.hash.get(id);
        if (node) {
            this.currentNode = node;
        } else {
            console.log("Current Node Set Not Found In Cache");
        }
    }

    getHeadNode(): T | null {
        return this.head?.value || null;
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
}
