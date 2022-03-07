/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start=0
    if(target <= nums[start]){
        return 0
    }
    while(start!=nums.length){
        if(nums[start] <= target && target <= nums[start+1]){
            return start+1
        }
        start++
    }
    return nums.length
};
