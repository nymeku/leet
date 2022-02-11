class Solution {
public:
    int maxArea(vector<int>& height) {
        int max_area = 0;
        int a = 0;
        int b = height.size()-1;
        
        while(a<b){
            if(height[a]<height[b]){
                max_area = max(max_area, height[a]*(b-a));
                a++;
            }else{
                max_area = max(max_area, height[b]*(b-a));
                b--;
            }
        }
        return max_area;
    }
};
