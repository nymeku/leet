/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     if(haystack === needle || needle.length==0){
        return 0
    }
    else if(haystack.includes(needle)){
        return haystack.indexOf(needle)
    }
    
    else{
        return -1
    }
};
