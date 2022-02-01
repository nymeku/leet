class Solution {
public:
    int romanToInt(string s) {
       map<char, int> m;
        m.insert({'I',1});
        m.insert({'V',5});
        m.insert({'X',10});
        m.insert({'L',50});
        m.insert({'C',100});
        m.insert({'D',500});
        m.insert({'M',1000});
            
        int integer = 0;
        for(int i=0;i<s.length();i++){
            auto it = m.find(s[i]);
            auto it_next = m.find(s[i+1]);
            integer = it_next->second > it->second ? integer - it->second : integer + it->second;
        }

        return integer;
    }
};