/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  if(s.length!==t.length){
    return false;
  }
  let count={}
  for(let i=0;i<s.length;i++){
    let c=s[i];
    if(count[c]){
        count[c]++;
    }
    else{
        count[c]=1;
    }
}  
    for(let i=0;i<t.length;i++){
        let a=t[i];
        if(!count[a]){
            return false
        }
    count[a]--;
    }
    return true;
};