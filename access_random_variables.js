let array = [1,2,3,4,5];

function task([a,b, ...res]){
    return  [a, b, res[res.length - 1]];
}
console.log(task(array))