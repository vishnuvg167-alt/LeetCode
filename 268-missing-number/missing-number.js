/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let m=nums.length;
  for(let i=0;i<nums.length;i++){
   m^=i^nums[i]; 
  }  
  return m;
};