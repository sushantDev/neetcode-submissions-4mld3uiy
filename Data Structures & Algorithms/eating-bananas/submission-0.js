class Solution {

    canFinish(piles, h, k) {
        let totalHours = 0

        for (let pile of piles) {
            totalHours += Math.ceil(pile / k)
        }

        return totalHours <= h
    }

    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let result = right

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (this.canFinish(piles, h, mid)) {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return result
    }
}
