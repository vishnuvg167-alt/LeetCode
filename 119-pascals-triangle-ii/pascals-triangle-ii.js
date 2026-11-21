/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const a =[1];
    for (let i = 1; i <= rowIndex; i++) {
        const next = (a[i - 1] * (rowIndex - i + 1)) / i;
        a.push(next);
    }
    return a;
};
