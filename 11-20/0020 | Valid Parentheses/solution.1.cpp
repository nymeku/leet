class Solution
{

public:
    bool isValid(string s)
    {
        map<char, char> config;
        config.insert({')', '('});
        config.insert({']', '['});
        config.insert({'}', '{'});

        vector<char> stock;

        for (int i = 0; i < s.length(); i++)
        {

            auto it = config.count(s[i]);
            auto truc = config.find(s[i]);

            if (it == 0)
            {
                stock.push_back(s[i]);
            }
            else if ((stock.size() > 0) && (truc->second == stock[stock.size() - 1]))
            {
                stock.pop_back();
            }
            else
            {
                return false;
            }
        }
        return stock.size() == 0;
    }
};