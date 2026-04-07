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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = []

        function dfs(node, res) {
            if(node === null) {
                res.push('N')
                return
            }
            res.push(node.val.toString())
            dfs(node.left, res)
            dfs(node.right, res)
        }

        dfs(root, res)
        return res.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(",")
        const i = { val: 0 }

        function dfs(vals, i) {
            if (vals[i.val] === 'N') {
                i.val++
                return null
            }
            const node = new TreeNode(parseInt(vals[i.val]))
            i.val++
            node.left = dfs(vals, i)
            node.right = dfs(vals, i)
            return node
        }
        return dfs(vals, i)
    }
}
