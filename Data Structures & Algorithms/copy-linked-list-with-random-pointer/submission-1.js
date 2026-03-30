// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null
        let copy = new Map()
        let curr = head

        while (curr !== null) {
            copy.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while (curr !== null) {
            let copyNode = copy.get(curr)
            copyNode.next = copy.get(curr.next) || null
            copyNode.random = copy.get(curr.random) || null
            curr = curr.next
        }

        return copy.get(head)
    }
}
