/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let stock = []
    nums.sort((a,b) => a-b)
    for(let i=0;i<nums.length-3;i++){
        if(i>0 && nums[i] == nums[i-1]){
                continue;
            }
        for(let j=i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j] == nums[j-1]){
                continue;
            }
            
                let start = j+1
                let end = nums.length-1
                let sumA = nums[i] + nums[j]
                
                while(start < end){
                    let sumB = nums[start] + nums[end] + sumA
                    
                    if(sumB == target){
                        let t = [nums[i],nums[j],nums[start],nums[end]]
                        stock.push(t)
                        
                        start++
                        end--
                        
                        while(start < end && (nums[start] == nums[start-1])){
                            start++
                        }
                        
                        while(start < end && (nums[end] == nums[end+1])){
                            end--
                        }
                    }
                    
                    else if (sumB < target){
                        start++
                    }
                    
                    else {
                        end--
                    }
                    
                }
            } 
    }
    return stock
};
