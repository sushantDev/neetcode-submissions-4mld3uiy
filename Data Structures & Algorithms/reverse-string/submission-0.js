class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0
        let right = s.length - 1

        while (right > left) {
            let oldLeft = s[left]
            s[left] = s[right]
            s[right] = oldLeft
            left++
            right--
        }

        return s
    }
}
