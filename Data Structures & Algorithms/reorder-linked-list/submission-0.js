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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }

        let l2 = slow.next
        let prev = (slow.next = null)

        while (l2 !== null) {
            const tmp = l2.next
            l2.next = prev
            prev = l2
            l2 = tmp
        }
        let l1 = head
        l2 = prev

        while (l2 !== null) {
            const tmp1 = l1.next
            const tmp2 = l2.next
            l1.next = l2
            l2.next = tmp1
            l1 = tmp1
            l2 = tmp2
        }
    }
}
