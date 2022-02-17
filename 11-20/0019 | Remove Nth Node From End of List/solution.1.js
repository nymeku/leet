/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let stock = []
    let current = new ListNode(0)
    let result = current

    while(head){
        stock.push(head.val)
        head = head.next
    }
    stock.splice(stock.length-n,1)
    
    for(let i=0;i<stock.length;i++){
        current.next = new ListNode(stock[i])
        current = current.next
    }
    return result.next
};
