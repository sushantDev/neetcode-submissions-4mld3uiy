class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let output = []
        let deque = []
        let l = 0

        for (let r = 0; r < nums.length; r++) {
            // pop smaller values from deque
            while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop()
            }

            deque.push(r)

            if (deque[0] < l) {
                deque.shift()
            }

            // push the leftmost index from the deque to the output as it has the max value from a window
            if (r - l + 1 === k) {
                output.push(nums[deque[0]])
                l++
            }
        }

        return output
    }
}
