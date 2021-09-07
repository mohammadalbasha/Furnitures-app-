var k ={
    salad:1,
    fruit :2
};
var a =Object.keys(k);
a=a.map(e=> {
    return [...Array(k[e])];
});
console.log(a);