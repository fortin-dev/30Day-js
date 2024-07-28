// Task 1 : use template litral to create a string that includes variable of persons name and age

let name = 'fortin'
let age = 21
 
let tempString = `His name is ${name} and he is ${age} year old`
console.log(tempString);

let addres = 'India'
// let newString = `His name is ${name} and 
//                     he is ${age} year old
//                     he lives in ${addres}`
//                     console.log(newString);............ I intially wrote like this to increase readability , but it even captures exact space that is given

let newString = `His name is ${name}, 
he is ${age} year old,
he lives in ${addres}`
console.log(newString);