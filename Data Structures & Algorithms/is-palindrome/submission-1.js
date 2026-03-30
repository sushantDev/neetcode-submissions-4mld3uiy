class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        // console.log(newString)
        for (let i = 0, j = newString.length - 1; i < j; i++, j--) {
            // console.log(`${i} has ${newString[i]}`)
            // console.log(`${j} has ${newString[j]}`)
            if (newString[i] !== newString[j]) {
            return false
            }
        }
        return true
    }
}
