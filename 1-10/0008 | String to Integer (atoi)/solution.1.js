/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let sign = '';
    let stock = "";
    let minValue = (-2)**31
    let maxValue = (2**31)-1
    
    for(let i=0;i<s.length;i++){
        let code = s[i].charCodeAt()
        if(48<= code <= 57){
            stock += s[i]
        }
        else if((code == 43 || code == 45) && sign.length == 0){
            sign = s[i];
        }
        else {
            break;
        }
    }
    let f = sign+stock
    let ff = parseInt(f) || 0;
    
    if(ff < minValue){
        return (-2)**31
    }
    if(ff > maxValue){
        return (2**31)-1 
    }
    
    return ff;
};