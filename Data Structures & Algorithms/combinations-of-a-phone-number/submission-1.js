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

        const backtrack = (i, comb) => {
            if (i === digits.length) {
                res.push(comb.join(''))
                return
            }

            for (let char of maps[digits[i]]) {
                comb.push(char)
                backtrack(i + 1, comb)
                comb.pop()
            }
        }

        backtrack(0, [])
        return res
    }
}
