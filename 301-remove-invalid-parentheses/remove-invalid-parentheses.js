/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const Valid=(str)=>{
    let count=0;

    for(let char of str){
      if(char==='(') {
        count++;
      }
      else if(char===')'){
        count--;
      }
      if(count<0) return false;
    }
    return count===0;
  }

  const result=[];
  const visited= new Set();
  const queue=[s];
  visited.add(s);

  let found=false;

  while (queue.length>0){
    const c=queue.shift();

    if(Valid(c)){
      result.push(c);
      found=true;
    }
    if(found ) continue;

    for(let i=0;i<c.length;i++){
      if(c[i]!=='(' && c[i]!==')')
        continue;
    const next=c.slice(0,i)+c.slice(i+1);
      if(!visited.has(next)){
        visited.add(next);
        queue.push(next);
      }
    }
  }
    return result;
};