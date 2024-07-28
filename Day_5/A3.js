// Task 5 : Calculat the sum of two number using arrow function and return the result

// let sumOfTwo = (num1, num2)=>  (num1+num2)
// console.log(sumOfTwo(12,14));

let sumOfTwo = ((num1, num2) =>  {
    return (num1+num2)
});

console.log(sumOfTwo(19,1));


// Task 6 : check if string contains a specific word using arrow function

let specificWord = 'a';

const str = ((checkStr) => {
    if(checkStr.includes(specificWord)){
        return true;
    }
    else
    return false;
});

console.log(str("India"))
console.log(str("IndiA"))
