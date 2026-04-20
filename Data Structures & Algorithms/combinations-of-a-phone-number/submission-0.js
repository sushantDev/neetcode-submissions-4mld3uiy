class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") return []
        const maps = {
            '1': '',
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        const res = []

        this.backtrack(0, digits, maps, res, [])
        return res
    }

    backtrack(i, digits, maps, res, stack) {
        if (i === digits.length) {
            res.push(stack.join(''))
            return 
        }

        for (let char of maps[digits[i]]) {
            stack.push(char)
            this.backtrack(i+1, digits, maps, res, stack)
            stack.pop()
        }
    }
}
