class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        vector<vector<int>> stock;
        
        if(nums.size()<3)
            return {};
        
        for(int i=0;i<nums.size()-2;i++){
            if(i==0 || (i>0 && nums[i] != nums[i-1])){
                int target = -nums[i];
                int low = i+1;
                int high = nums.size()-1;
                while(low<high){
                    if(nums[low]+nums[high] == target){
                        stock.push_back({nums[i],nums[low],nums[high]});
                        while(low<high && nums[low]==nums[low+1])
                            low++;
                        while(low<high && nums[high]==nums[high-1])
                            high--;
                        low++;
                    }
                    else if(nums[low]+nums[high] < target)
                        low++;
                    else
                        high--;
                }
            }
        }
        return stock;
        
    }

};
