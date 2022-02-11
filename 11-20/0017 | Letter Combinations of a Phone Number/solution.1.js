/**
 * @param {string} digits
 * @return {string[]}
 */
var tqt = (stock, digit) => {
    const comb = {
        "2":['a','b','c'],
        "3":['d','e','f'],
        "4":['g','h','i'],
        "5":['j','k','l'],
        "6":['m','n','o'],
        "7":['p','q','r','s'],
        "8":['t','u','v'],
        "9":['w','x','y','z']
    }
    if(stock.length==0){
        return stock = [...comb[digit]]
    }
    let toR = []
    for(let i=0;i<stock.length;i++){
        for(let j=0;j<comb[digit].length;j++){
            let t = stock[i] + comb[digit][j];
            toR.push(t)
        }
    }
    return toR;
}
var letterCombinations = function(digits) {
    var stock = [];
    for(let i=0;i<digits.length;i++){
        let result = tqt(stock,digits[i])
        stock = [...result]
    }
    return stock
};
