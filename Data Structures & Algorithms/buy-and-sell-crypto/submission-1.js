class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let maxPrice = 0
        
        for (let price of prices) {
            minPrice = Math.min(minPrice, price)
            let profit = price - minPrice
            maxPrice = Math.max(maxPrice, profit)
        }
        
        return maxPrice
    }
}
