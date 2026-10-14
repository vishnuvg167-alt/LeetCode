/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0)
    return false;
   
  let orginal=x;
  let reverse=0;
  while(x>0){
    let d=x%10;
    reverse=reverse*10+d;
    x=Math.floor(x/10);
  }
  return orginal===reverse;
};