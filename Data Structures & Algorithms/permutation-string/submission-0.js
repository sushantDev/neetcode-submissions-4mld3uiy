class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Count = {}
        let s2Count = {}

        let left = 0

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1
        }

        for (let right = 0; right < s2.length; right++) {
            s2Count[s2[right]] = (s2Count[s2[right]] || 0) + 1

            if (right - left + 1 > s1.length) {
                let leftChar = s2[left]
                s2Count[leftChar]--

                if (s2Count[leftChar] === 0) {
                    delete s2Count[leftChar]
                }

                left++
            }

            if (right - left + 1 === s1.length) {
                let matchFound = true

                for (let char in s1Count) {
                    if (s1Count[char] !== s2Count[char]) {
                        matchFound = false
                        break
                    }
                }

                if (matchFound) return true
            }
        }

        return false
    }
}
