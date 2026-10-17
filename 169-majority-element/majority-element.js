/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let c = {};
    for (let i = 0; i < nums.length; i++) {
        c[nums[i]] = (c[nums[i]] || 0) + 1;
        if (c[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    } 
};