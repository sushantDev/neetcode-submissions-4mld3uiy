class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = {};

        const dfs = (amount) => {
            if (amount === 0) return 0;
            if (amount < 0) return Infinity;

            // already solved
            if (amount in memo) {
                return memo[amount];
            }

            let res = Infinity;

            for (let coin of coins) {
                res = Math.min(res, 1 + dfs(amount - coin));
            }

            memo[amount] = res;
            return res;
        };

        const ans = dfs(amount);
        return ans === Infinity ? -1 : ans;
    }
}
