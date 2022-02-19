/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0)
    let result = dummy
    let carry = 0
    while(l1 || l2){
        if(!l1){
            l1 = new ListNode(0)
        }
        else if(!l2){
            l2 = new ListNode(0)
        }
        let sum = l1.val + l2.val + carry
        carry = 0
        if(sum>=10){
            carry ++
        }
        dummy.next = new ListNode(sum%10)
        dummy = dummy.next
        l1 = l1.next
        l2 = l2.next
    }
    if(carry>0){
        dummy.next = new ListNode(carry)
    }
    
    
    return result.next
};
