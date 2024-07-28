
//Task 1 : create an array of no. form 1-5 

let array = [1, 2, 3, 4, 5]
console.log(array);

let loopArray = []
let size = 5

for (let index = 0; index < size; index++) {
    loopArray[index]=index+1;  
}
console.log("Array created using loop : ",loopArray);

//Task 2 : access first and last element

array = [10, 8, 5, 3, 9 ,6 ,1]
let lastElement = array[(array.length)-1]
let firstElement =array[0]
console.log(`First element of array is ${firstElement} and last element is ${lastElement}`);