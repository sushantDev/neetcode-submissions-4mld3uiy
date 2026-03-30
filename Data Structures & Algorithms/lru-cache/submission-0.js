class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()

        this.head = new Node(0, 0)
        this.tail = new Node(0,0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    insert(node) {
        node.next = this.head.next
        node.prev = this.head

        this.head.next.prev = node
        this.head.next = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1

        let node = this.map.get(key)
        this.remove(node)
        this.insert(node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            node.val = value
            this.remove(node)
            this.insert(node)
        } else {
            let node = new Node(key, value)
            this.map.set(key, node)
            this.insert(node)

            if(this.map.size > this.capacity) {
                let lru = this.tail.prev
                this.remove(lru)
                this.map.delete(lru.key)
            }
        }
    }
}
