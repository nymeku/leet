class Solution
{
public:
    int threeSumClosest(vector<int> &nums, int target)
    {
        map<int, int> m;
        for (int i = 0; i < nums.size(); i++)
        {
            m[nums[i]]++;
        }
        int somme = 0;
        int difference = INT_MAX;
        for (pair<int, int> feu : m)
        {
            if (feu.second == 0)
                continue;
            m[feu.first]--;

            for (pair<int, int> terre : m)
            {
                if (terre.second == 0)
                    continue;
                m[terre.first]--;

                for (pair<int, int> eau : m)
                {
                    if (eau.second == 0)
                        continue;

                    int temp = feu.first + terre.first + eau.first;
                    if (temp == target)
                    {
                        return temp;
                    }

                    int diff = abs(target - temp);
                    if (diff < difference)
                    {
                        difference = diff;
                        somme = temp;
                    }
                }
                m[terre.first]++;
            }
            m[feu.first]++;
        }
        return somme;
    }
};