class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string stock="";
        for(int i=0;i<strs[0].length();i++){
            char temp = strs[0][i];
            for(int j=0;j<strs.size();j++){
                if(temp != strs[j][i]){
                    return stock;
                }
                
            }
            stock += temp;
        }
        return stock;
    }
    
};