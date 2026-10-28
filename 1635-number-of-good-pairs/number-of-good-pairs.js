/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const count={};
    let good=0;
    for(const num of nums ){
        if(count[num]){
            good+=count[num];
            count[num]++;
        }
        else{
            count[num]=1;
        }
    }
    return good;
};