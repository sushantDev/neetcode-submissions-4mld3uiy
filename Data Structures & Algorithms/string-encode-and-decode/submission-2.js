class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""

        for (let str of strs) {
            encodedStr = encodedStr + str.length + '#' + str
        }

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strDecoded = []

        let i = 0;

        while (i < str.length) {
            let j = i

            while (str[j] !== '#') {
                j++
            }

            const length = parseInt(str.slice(i, j))

            i = j + 1
            j = j + 1 + length

            const word = str.slice(i, j)

            strDecoded.push(word)

            i = j
        }

        return strDecoded
    }
}
