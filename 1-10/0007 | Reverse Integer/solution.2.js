/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var max_value = Math.pow(2,31) -1
    var min_value = Math.pow(-2,31)
    
    let negatif;
    x > 0 ? negatif = false : negatif = true
    
    x = Math.abs(x)
    
    let stock = 0;
    while(x>0){
        let unit = x%10;
        stock = stock *10 + unit
        x = Math.floor(x/10)
    }
    
    if(stock < min_value || stock > max_value){
        return 0
    }
    return !negatif ? stock : stock*(-1);
};
