class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [[1,0], [-1,0], [0,1], [0,-1]]
        const ROWS = grid.length
        const COLS = grid[0].length

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
                return 0
            }
            grid[r][c] = 0
            let area = 1
            for (const [dr, dc] of directions) {
                area += dfs(r + dr, c + dc)
            }
            return area
        }

        let maxArea = 0
        for (let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c))
                }
            }
        }

        return maxArea
    }
}
