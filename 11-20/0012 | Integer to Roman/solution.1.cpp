#include <iostream>
int main(){
    string intToRoman(int num) {
        map<int,char*, greater<int>> m;
        
        
        m.insert({1,"I"});
        m.insert({4,"IV"});
        m.insert({5,"V"});
        m.insert({9,"IX"});
        m.insert({10,"X"});
        m.insert({40,"XL"});
        m.insert({50,"L"});
        m.insert({90,"XC"});
        m.insert({100,"C"});
        m.insert({400,"CD"});
        m.insert({500,"D"});
        m.insert({900,"CM"});
        m.insert({1000,"M"});
        
        
        int r;
        string f;
        for(pair<int,char*> element : m){
            r = num%element.first;
                int i = (num-r)/element.first;
                for(int o=0;o<i;o++){
                    f += element.second;
                }
                num = r;
            if(num == 0) {
                break;
            }
        }
    
        return f;
    }
};