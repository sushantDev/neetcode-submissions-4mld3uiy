class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        const capture = (r, c) => {
            if (r < 0 || r == ROWS || c < 0 || c == COLS || board[r][c] !== 'O') {
                return;
            }
            board[r][c] = "T";
            for (let [dr, dc] of directions) {
                capture(r + dr, c + dc);
            }
        }

        // 1. (DFS) Capture unsurrounded regions (O -> T)
        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === 'O') capture(r, 0);
            if (board[r][COLS - 1] === 'O') capture(r, COLS - 1);
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === 'O') capture(0, c);
            if (board[ROWS - 1][c] === 'O') capture(ROWS - 1, c);
        }

        // 2. Capture surrounded regions (O -> X)
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] == 'O') {
                    board[r][c] = 'X';
                }
            }
        }

        // 3. Uncapture unsurrounded regions (T -> O)
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] == 'T') {
                    board[r][c] = 'O';
                }
            }
        }
    }
}
