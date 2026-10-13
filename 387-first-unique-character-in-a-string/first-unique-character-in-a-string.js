/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count={};

    for(let i=0;i<s.length;i++){
        let a=s[i];

        if(count[a]){
            count[a]++;
        }
        else{
            count[a]=1;
        }
    }
    for(let j=0;j<s.length;j++){
        if(count[s[j]]===1){
            return j;
        }
    }
    return -1;
};