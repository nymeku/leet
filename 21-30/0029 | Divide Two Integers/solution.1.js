/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let max_value = Math.pow(2,31)-1 
    let min_value = Math.pow(-2,31)
    
    if(divisor==-1 && dividend==min_value){
        return max_value   
    }
    
    let a = Math.abs(dividend)
    let b = Math.abs(divisor)
    let res = 0
    
    while(a-b >= 0){
        a -= b
        res++
    }
    
    let moins = true
    if((dividend<=0 && divisor<0) || (dividend>=0 && divisor>0)) {
        moins=false
    }
    
    return moins ? (-1)*res : res
};
