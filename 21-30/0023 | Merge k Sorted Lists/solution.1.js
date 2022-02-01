/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var flatList = function(list){
    let flat = []
    while(list !== null){
        flat.push(list.val)
        list = list.next
    }
    return flat
}
var mergeKLists = function(lists) {
    let stock = lists.flatMap(x => {return flatList(x)}).sort((a,b) => a-b)
    let final = null
    for(let i=stock.length-1;i>=0;i--){
        final = new ListNode(stock[i], final)
    }
    return final
    
};