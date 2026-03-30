class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        
        let left = 0
        let right = heights.length - 1
        
        while (left < right) {
            let water = (right - left) * Math.min(heights[left], heights[right])
            
            if (water !== undefined) {
                maxWater = Math.max(maxWater, water)
            }
            
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }
        
        return maxWater
    }
}
