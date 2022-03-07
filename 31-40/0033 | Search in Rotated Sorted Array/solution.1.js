/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    while(start!=nums.length){
        if(nums[start] == target){
            return start
        }
        start++
    }
    return -1
};
