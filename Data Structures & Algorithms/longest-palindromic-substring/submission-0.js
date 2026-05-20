class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = "";

        const expand = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            // boundaries went too far
            return s.slice(left + 1, right);
        }

        for (let i = 0;  i < s.length; i++) {
            // odd length palindrome
            let odd = expand(i, i);

            // even length palindrome
            let even = expand(i, i + 1);

            if (odd.length > result.length) {
                result = odd;
            }

            if (even.length > result.length) {
                result = even;
            }
        }

        return result;
    }
}
