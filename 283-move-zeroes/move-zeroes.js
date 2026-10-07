/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let a=0;
    for(let b=0;b<nums.length;b++){
        if(nums[b]!==0){
        [nums[a],nums[b]]=[nums[b],nums[a]]
        a++
        }
    }
};