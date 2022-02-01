class Solution {
public:
    vector<string> generateParenthesis(int n) {
        cout<<n<<endl;
        return generateStr("",n,n);
    }
    vector<string> generateStr(string current,int nbF, int nbO){
        char o = '(';
        char f = ')';
        vector<string> stock;
        cout<<nbF <<" "<< nbO<<endl;
        if(nbO == 0 && nbF == 0){
            cout<<"premier if"<<endl;
            stock.push_back(current);
            return stock;
        }
        if (nbO > 0 && nbO < nbF){
            cout<<"deuxieme if"<<endl;
            vector<string> pos2 = generateStr(current+f, nbF-1, nbO);
            vector<string> pos1 = generateStr(current+o, nbF, nbO-1);
            
            stock.insert(stock.end(),pos1.begin(),pos1.end());
            stock.insert(stock.end(),pos2.begin(),pos2.end());
            
        }
        else if(nbO > 0) {
            cout<<"else if 1"<<endl;
            
            vector<string> pos3 = generateStr(current+o, nbF, nbO-1);
            stock.insert(stock.end(),pos3.begin(),pos3.end());
        }
        else {
            cout<<"else"<<endl;
            
            vector<string> pos4 = generateStr(current+f, nbF-1, nbO);
            stock.insert(stock.end(),pos4.begin(),pos4.end()); 
        }
        return stock;
    }
};