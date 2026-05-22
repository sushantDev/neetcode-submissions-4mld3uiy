class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = new Map();

        const dfs = (i) => {
            // reached valid end
            if (i === s.length) {
                return 1;
            }

            // invalid
            if (s[i] === '0') {
                return 0;
            }

            // already computed
            if (memo.has(i)) {
                return memo.get(i);
            }

            let ways = 0;

            // take one digit
            ways += dfs(i + 1);

            // take two digits
            if (
                i + 1 < s.length && 
                (
                    s[i] === '1' || 
                    (s[i] === '2' && s[i + 1] <= '6')
                )
            ) {
                ways += dfs(i + 2);
            }

            memo.set(i, ways);

            return ways;
        }

        return dfs(0);
    }
}
