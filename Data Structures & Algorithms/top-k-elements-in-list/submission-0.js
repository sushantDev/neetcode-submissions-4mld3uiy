class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}

        for (let num of nums) {
            map[num] = (map[num] || 0) + 1
        }

        return Object.keys(map).sort((a,b) => map[b] - map[a]).slice(0, k).map(Number)
    }
}
