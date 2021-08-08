/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }

    let tempNode = new ListNode(-1, null)

    while (head !== null) {
        let nextNode = head.next

        head.next = tempNode.next
        tempNode.next = head

        head = nextNode
    }

    return tempNode.next
}
