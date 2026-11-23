/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count=0;
    for(const a of patterns){
        if(word.includes(a)){
            count++;
        }
    }
    return count;
};