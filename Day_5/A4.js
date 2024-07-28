//Task 7 : Write a function that returns product of two numbers and assign a default value to second parameter

function product(num1, num2 = 5){
    return (num1*num2)
}

// console.log(product(3,4));
// console.log(product(5,));
// console.log(product(7));

//Task 8 : input name and age and return greetings  , provide default value for age

function greetings(name, age = 18){
    if(name){
        return (`Wellcome ${name}, Age : ${age}`)
    }
    else
    return "Please give your name and age"
}

console.log(greetings(""));
