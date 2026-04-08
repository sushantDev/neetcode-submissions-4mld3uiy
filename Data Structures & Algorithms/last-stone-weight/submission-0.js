class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue()

        for (const stone of stones) {
            maxHeap.enqueue(stone)
        }

        while(maxHeap.size() > 1) {
            const y = maxHeap.dequeue()
            const x = maxHeap.dequeue()

            if (y !== x) {
                maxHeap.enqueue(y - x)
            }
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0
    }
}
