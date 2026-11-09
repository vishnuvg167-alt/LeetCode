/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows<=0) return [];

  const tri=[[1]];

  for(let i=1;i<numRows;i++){
    const prev=tri[i-1];
    const current=[1];

    for(let j=1;j<prev.length;j++){
        current.push(prev[j-1]+prev[j]);
    }
    current.push(1);
    tri.push(current)
  }  
  return tri;
};