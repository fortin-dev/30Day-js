//print no. 1-5 using do-while loop

let num = 1;
do(
    console.log(num),
    num++
)
while(num<=5);


//factorial of a number using do-while loop

num = 5;
let i = 1;
let factorial = 1;
do(
    factorial*=i,
    i++
)
while(i<=num);
console.log(factorial);