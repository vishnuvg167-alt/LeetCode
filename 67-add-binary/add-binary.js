/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let c=a.length-1;
    let d=b.length-1;

    let x=0;
    let res=[];

    while(c>=0||d>=0|| x>0){
        let s=x;
        if(c>=0){
            s+=Number(a[c]);
            c--;
        }
        if(d>=0){
            s+=Number(b[d]);
            d--;
        }
        res.push(s%2);
        x=Math.floor(s/2);
    }
    return res.reverse().join("");
};