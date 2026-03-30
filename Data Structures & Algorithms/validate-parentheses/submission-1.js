class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            ']' : '[',
            '}' : '{',
            ')' : '('
        }
        
        for (let n of s) {
            if (closeToOpen[n]) {
                if (stack.length && stack[stack.length - 1] === closeToOpen[n]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(n)
            }
        }

        return stack.length === 0
    }
}
