//Task 1 : check even odd in a function

function evenOdd(num){
    if(num%2 == 0){
        console.log(num, "is even");
    }
    else
    console.log(num, "is odd");
}

evenOdd(6)

//Task 2 : calculate square of a number

function sqrNumber(number){
    return (number*number)
}

console.log(`Square is ${sqrNumber(5)}`);