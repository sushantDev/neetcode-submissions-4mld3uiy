class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        // Edge case
        if (n === 1) return nums[0];

        // Solve normal House Robber I
        const robLinear = (arr) => {
            let prev1 = 0;
            let prev2 = 0;

            for (let money of arr) {
                const temp = Math.max(prev1, money + prev2);
                prev2 = prev1;
                prev1 = temp;
            }

            return prev1;
        }

        // Case 1: skip last
        const case1 = robLinear(nums.slice(0, n-1));

        // Case 2: skip first
        const case2 = robLinear(nums.slice(1));

        return Math.max(case1, case2);
    }
}
