class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    product = product * nums[j]
                }
            }
            map[i] = product
        }

        return Object.values(map)
    }
}
