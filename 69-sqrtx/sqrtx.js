/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let a = 1;
    let b = Math.floor(x / 2);

    while (a <= b) {
        const mid = Math.floor((a+b) / 2);
        const s = mid * mid;

        if (s === x) {
            return mid;
        } else if (s < x) {
            a = mid + 1;
        } else {
            b = mid - 1;
        }
    }

    return b;
};