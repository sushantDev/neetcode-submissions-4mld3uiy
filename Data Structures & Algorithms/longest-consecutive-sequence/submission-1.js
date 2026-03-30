class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                let current = num;

                while (set.has(current + 1)) {
                    current++
                    length++
                }

                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
