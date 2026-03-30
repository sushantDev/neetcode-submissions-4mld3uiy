class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i]

            if (row[0] <= target && row[row.length - 1] >= target) {
                let left = 0
                let right = row.length - 1

                while (left <= right) {
                    let mid = Math.floor((right + left) / 2)

                    if (row[mid] === target) return true
                    else if (row[mid] < target) left = mid + 1
                    else right = mid - 1
                }
            }
        }

        return false
    }
}
