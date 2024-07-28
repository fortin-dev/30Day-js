// Task 7 : using default values in function

function giveProduct(para1, para2=1){
    return para1*para2
}

console.log(`product of both values : ${giveProduct(4,5)}`);
console.log(`product of first and default value : ${giveProduct(8)}`);