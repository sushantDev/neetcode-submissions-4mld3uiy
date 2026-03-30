/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let res = new ListNode(0)
        let sum = 0
        let carry = 0
        let curr = res
        while (l1 !== null || l2 !== null || carry !== 0) {
            let digit = 0
            let val1 = l1 ? l1.val : 0
            let val2 = l2 ? l2.val : 0
            sum = val1 + val2 + carry
            digit = sum % 10
            carry = Math.floor(sum / 10)
            curr.next = new ListNode(digit)
            curr = curr.next
            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        return res.next
    }
}
