class Solution {
    constructor() {
        this.res = []
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        this.dfs(nums, 0)
        return this.res
    }

    dfs(nums, idx) {
        if (idx === nums.length) {
            this.res.push([...nums])
            return
        }
        for (let i = idx; i < nums.length; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            this.dfs(nums, idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }
}
