class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        const INF = 2147483647;
        const q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r,c]);
                }
            }
        }

        while (!q.isEmpty()) {
            const [r,c] = q.pop();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS ||
                    grid[nr][nc] !== INF) {
                    continue;
                }

                grid[nr][nc] = grid[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }
}
