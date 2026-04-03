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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = []
        if (!root) return res

        let queue = new Queue()
        queue.push(root)

        while (!queue.isEmpty()) {
            let level = []

            for (let i = queue.size(); i > 0; i--) {
                let node = queue.pop()
                if (node !== null) {
                    level.push(node.val)
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }

            if (level.length > 0) {
                res.push(level)
            }
        }

        return res
    }
}
