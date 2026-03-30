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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = [0]
        this.dfs(root, diameter)
        return diameter[0]
        
    }

    dfs(root, diameter) {
        if (!root) return 0

        let left = this.dfs(root.left, diameter)
        let right = this.dfs(root.right, diameter)

        diameter[0] = Math.max(diameter[0], left + right)

        return 1 + Math.max(left, right)
    }
}
