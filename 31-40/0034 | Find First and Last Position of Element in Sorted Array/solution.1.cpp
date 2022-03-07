class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        map<int, vector<int>> m;
        vector<int> result({-1,-1});
        for(int i=0;i<nums.size();i++){
            m[nums[i]].push_back(i);
        }
        
        if(m.count(target)==0){
            return result;
        }
        
        if(m[target].size() ==1){
            result[0]=m[target][0];
            result[1]=m[target][0];
        }
        else {
            result[0] = *min_element(m[target].begin(), m[target].end());
            result[1] = *max_element(m[target].begin(), m[target].end());
        }
        
        return result;
    }
};
