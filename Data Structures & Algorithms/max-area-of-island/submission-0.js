class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        const ROWS = grid.length
        const COLS = grid[0].length

        let maxArea = 0

        const bfs = (r, c) => {
            const queue = [[r, c]]
            grid[r][c] = 0
            let area = 1

            while (queue.length) {
                const [row, col] = queue.shift()
                for (let [dr, dc] of directions) {
                    const nr = row + dr
                    const nc = col + dc

                    if (nr >= 0 && nr < ROWS && nc >=0 && nc < COLS && grid[nr][nc] === 1) {
                        queue.push([nr, nc])
                        grid[nr][nc] = 0
                        area++
                    }
                }
            }

            return area
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    const area = bfs(r, c)
                    maxArea = Math.max(maxArea, area)
                }
            }
        }

        return maxArea
    }
}
