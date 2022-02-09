class Solution {
public:
    string convert(string s, int numRows) {
    vector<string> solde(numRows);
    for(int i=0;i<s.length();i++){
        int t = (2*numRows-2);
        if(numRows ==1)
            t = 1;
        int mod = i%t;
    if(mod<numRows){
            solde[mod] += s[i];
        }
  
        else{      
            int jj = 2*numRows - 2 - mod;
            solde[jj] += s[i];
        }
    }
    string ss = ;
    for(int j=0;j<solde.size();j++){
        ss += solde[j];
    }
    return ss;
    }
};
