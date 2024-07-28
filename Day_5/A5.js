//Task 9 : write a high-order function which has function and a number as parameter : 
//           and the funcitons is called many times as of the number

function highOrder(calling, num){
    
    for(let i=1 ; i<=num ; i++){
        console.log(calling);
    }
}

function func(){
    return ("I will run multiple times");
}

// highOrder(func(),3)


//Task 10 : write a high-order function which has two function and a value as parameter, 
//          and pass the value to first parameter funtion and pass "its" result to second function

function highOrderTwo(func1, func2, value){
    let result = func1(value);
    return (func2(result))
}

function double (num){
    return (num+num)
}
function sqr (num){
    return (num*num)
}

console.log(highOrderTwo(double, sqr, 5))