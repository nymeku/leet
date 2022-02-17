/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    var dummy = new ListNode(0)
    var result = dummy
    
    while(head != null && head.next != null){
        var tmp = new ListNode(head.val, head.next.next)
        dummy.next = new ListNode(head.next.val)
        dummy.next.next = new ListNode(tmp.val)
        head = head.next.next
        dummy = dummy.next.next
    }
    dummy.next = head
    return result.next
}
