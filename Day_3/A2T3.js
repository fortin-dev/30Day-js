//largest no. among three

let num1 = 23,
    num2 = 45,
    num3 = 12;

 if(num1 >= num2){
    if(num1 >= num3){
        console.log(`${num1} is largest among ${num2} & ${num3}`);
    }
    else
    console.log(`${num3} is largest among ${num2} & ${num1}`);
 }
 else if(num2 >= num3){
    console.log(`${num2} is largest among ${num1} & ${num3}`);
 }
 else
 console.log(num3);