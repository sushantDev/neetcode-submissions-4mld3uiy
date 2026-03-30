class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
  
        for (let item of tokens) {
            if (item === '+' || item === '-' || item === '*' || item === '/') {

                let secondItem = stack.pop()
                let firstItem = stack.pop()
                let val = 0

                if (item === '+') {
                    val = firstItem + secondItem
                } else if (item === '-') {
                    val = firstItem - secondItem
                } else if (item === '*') {
                    val = firstItem * secondItem
                } else {
                    val = Math.trunc(firstItem / secondItem)
                }
                stack.push(val)
            } else {
                stack.push(Number(item))
            }
        }
        
        return stack[0]
    }
}
