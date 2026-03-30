class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = {}
        
        for (let i = 0; i < numbers.length; i++) {
            let need = target - numbers[i]
            
            if (map[need] !== undefined) {
                return [map[need] + 1, i + 1]
            }
            
            map[numbers[i]] = i
        }
    }
}
