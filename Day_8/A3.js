// Task 5 : use spread operator to create a new Array out of existing array plus addistional elements

let existingArray = [1,2,3,4,5,9,8,7,6]
let edi1 = 10,
    edi2 = 20,
    edi3 = 30;

let newArray =[...existingArray,edi1,edi2,edi3]

console.log(newArray);

//Task 6 : use rest operator to calculat sum of arbitrary number in a function

function sumofNumbs(...numbers) {
    let sum=0;
    for (const nums of numbers) {
        sum+=nums
    }
    return sum;
}

console.log(sumofNumbs(1,2,3,4,5));