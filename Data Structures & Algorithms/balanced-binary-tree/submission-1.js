/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root) === -1 ? false : true
    }

    dfs(root) {
        if (!root) return 0

        let left = this.dfs(root.left)
        if (left == -1) return -1

        let right = this.dfs(root.right)
        if (right == -1) return -1

        let height = 1 + Math.max(left, right)

        if (Math.abs(left - right) > 1) return -1

        return height
    }
}
