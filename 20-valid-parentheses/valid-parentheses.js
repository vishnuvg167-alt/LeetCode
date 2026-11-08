/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const a={
        ')': '(',
        '}': '{',
        ']': '['
    }
    const b=[];
    for(let i=0;i<s.length;i++){
        const c=s[i];

        if(a[c]!==undefined){
            const n=b.pop();

            if(n !==a[c]){
            return false;}
        }
        else{
           b.push(c);
        }
    }
        return b.length===0;
    
};