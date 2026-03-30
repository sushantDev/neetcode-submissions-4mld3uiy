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
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(-1)
        let tail = dummy

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }

        tail.next = list1 !== null ? list1 : list2

        return dummy.next
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null

        while (lists.length > 1) {
            let res = []

            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i]
                let l2 = (i + 1 < lists.length) ? lists[i + 1] : null

                if (l2) {
                    res.push(this.mergeTwoLists(l1, l2))
                } else {
                    res.push(l1)
                }
            }

            lists = res
        }

        return lists[0]
    }
}
