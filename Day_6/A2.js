//Task 3 : use push() to add a new number to existing array

let array = [3, 4, 6, 8, 10, 12]
console.log(`Old array : ${array}`);

array.push(77);

console.log(`New array : ${array}`);


//Task 4 : use pop() to remove a number from existing array

array = [3, 4, 6, 8, 10, 12]
console.log(`Old array : ${array}`);

array.pop()

console.log(`New array : ${array}`);


//Task 5 : use shift() to remove a number from existing array

array = [3, 4, 6, 8, 10, 12]
console.log(`Old array : ${array}`);

let remove = array.shift()

console.log(`New array is : ${array} & removed element is ${remove}`);


//Task 6 : use unshift() to add a new number to existing array

array = [0, 4, 6, 5, 10, 12]
console.log(`Old array : ${array}`);

array.unshift(100)

console.log(`New array : ${array}`);

