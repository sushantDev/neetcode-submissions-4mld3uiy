class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const h = height.length
        let leftSum = Array(h)
        let rightSum = Array(h) 
        
        leftSum[0] = height[0]
        for (let i = 1; i < h; i++) {
            leftSum[i] = Math.max(leftSum[i - 1], height[i])
        }
        
        rightSum[h - 1] = height[h - 1]
        for (let i = h - 2; i >= 0; i--) {
            rightSum[i] = Math.max(rightSum[i + 1], height[i])
        }
        
        let water = 0
        for (let i = 0; i < h; i++){
            water += Math.min(leftSum[i], rightSum[i]) - height[i]
        }
        
        return water
    }
}
