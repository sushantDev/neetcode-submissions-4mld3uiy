class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const res = new Set()
        
        let left = 0
        let right = heights.length - 1
        
        while (left < right) {
            let water = (right - left) * Math.min(heights[left], heights[right])
            
            if (water !== undefined) {
                res.add(water)
            }
            
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }
        
        return Math.max(...res)
    }
}
