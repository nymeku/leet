/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let j = i+1
    let stock = []
    
    while(j<=nums.length){
        if(nums[i]==nums[j]){
            j++
        }
        else{
            stock.push(nums[i])
            i++
            nums[i] = nums[j]
            j++
        }
    }
    nums = stock
    console.log(stock)
    return stock.length
};
