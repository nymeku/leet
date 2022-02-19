/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let front = 0
    if(nums.length==0){
        return 0
    }
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[front] = nums[i]
            front++
        }
        else{
            nums[i] = _
        }
        
    }
    return front
};
