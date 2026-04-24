class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }

    addWord(word) {
        let cur = this
        for (let char of word) {
            if (!(cur.children.has(char))) {
                cur.children.set(char, new TrieNode())
            }
            cur = cur.children.get(char)
        }
        cur.endOfWord = true
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode()
        for (const word of words) {
            root.addWord(word)
        }

        const ROWS = board.length
        const COLS = board[0].length
        const res = new Set()
        const visit = new Set()

        const dfs = (r, c, node, word) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS ||
                visit.has(`${r},${c}`) || !(node.children.has(board[r][c]))) {
                    return
            }

            visit.add(`${r},${c}`)
            node = node.children.get(board[r][c])
            word += board[r][c]
            if (node.endOfWord) {
                res.add(word)
            }

            dfs(r + 1, c, node, word)
            dfs(r - 1, c, node, word)
            dfs(r, c + 1, node, word)
            dfs(r, c - 1, node, word)

            visit.delete(`${r},${c}`)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root, '')
            }
        }

        return Array.from(res)
    }
}
