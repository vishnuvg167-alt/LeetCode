/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a,b)=>a-b);

    const i=nums.length;

    const small=nums[i-1]-nums[2];
    const large=nums[i-3]-nums[0];
    const c=nums[i-2]-nums[1];

    return Math.min(small,large,c)
};