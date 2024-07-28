// Task 7 : use map() to double the each element of an array and create a new one

let oldArray = [2, 5, 7 ,9 ,4, 8, 10]
const newArray = oldArray.map((num) => {
    return (num+num)
})

console.log("New Array : ", newArray);

//Task 8 : use filter() to reduce only even number from old array and fill it into new array

const allArray = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
const evenArray = allArray.filter((num) => {
    if( num%2 == 0 ){
        return num
    }
})
console.log("New Array with even element only : ", evenArray);


//Task 9 : use reduce() to calc. sum of all numbers in array

let randomArray = [1 ,3 ,5 ,7 ,4 ,6 ,4 ,14 ]
const sumOfArray = randomArray.reduce((preValue, currValue) => {
    return (preValue+currValue)
})
console.log("Sum of all element : ", sumOfArray);
