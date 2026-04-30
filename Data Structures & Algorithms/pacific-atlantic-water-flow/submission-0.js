class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        const pac = Array.from({length: ROWS}, () => Array(COLS).fill(false));
        const atl = Array.from({length: ROWS}, () => Array(COLS).fill(false));

        const dfs = (r, c, visit, prevHeight) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || 
                visit[r][c] || heights[r][c] < prevHeight) {
                    return;
            }
            visit[r][c] = true;

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, visit, heights[r][c]);
            }
        }

        // Pacific
        for (let c = 0; c < COLS; c++) dfs(0, c, pac, heights[0][c]);
        for (let r = 0; r < ROWS; r++) dfs(r, 0, pac, heights[r][0]);

        // Atlantic
        for (let c = 0; c < COLS; c++) dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
        for (let r = 0; r < ROWS; r++) dfs(r, COLS - 1, atl, heights[r][COLS - 1]);

        const res = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r,c]);
                }
            }
        }

        return res;
    }
}
