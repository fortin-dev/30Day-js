//Activity 3 : Task 10

//case : 1

let numb1 = 5;
let numb2 =5

if(numb1 == numb2){
    console.log("Both are equal");
}
else
console.log("They are not equal");

//case : 2

let numb = 5;
let notANumb = "5"

if(numb == notANumb){
    console.log("Both are equal");
}
else
console.log("They are not equal");
//here this should be incorrect but due to lack of strict checking it is giving wrong output

//case : 3

numb = 5;
notANumb ="5"

if(numb === notANumb){
    console.log("Both are equal");
}
else
console.log("They are not equal");

//case : 4

numb = 5;
let isANumb = 5;

if(numb === isANumb){
    console.log("Both are equal");
}
else
console.log("They are not equal");