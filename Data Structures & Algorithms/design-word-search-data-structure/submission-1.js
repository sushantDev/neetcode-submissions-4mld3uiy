class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root
        for (let char of word) {
            if (!cur.children.has(char)) {
                cur.children.set(char, new TrieNode())
            }
            cur = cur.children.get(char)
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (i, node) => {
            if (i === word.length) {
                return node.endOfWord
            }

            const char = word[i]

            if (char === '.') {
                for (let child of node.children.values()) {
                    if (dfs(i + 1, child)) return true
                }
                return false
            }

            if (!node.children.has(char)) return false

            return dfs(i + 1, node.children.get(char))
        }
        
        return dfs(0, this.root)
    }
}
