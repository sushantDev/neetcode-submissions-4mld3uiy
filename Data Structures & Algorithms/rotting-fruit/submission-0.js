class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = [];

        let fresh = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) q.push([r,c]);
                if (grid[r][c] === 1) fresh++;
            }
        }

        let minutes = 0

        while (q.length && fresh > 0) {
            let size = q.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = q.shift();

                for (let [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== 1) {
                        continue;
                    }
                    grid[nr][nc] = 2;
                    fresh--;
                    q.push([nr, nc]);
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
