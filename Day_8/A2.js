// Task 3 : array distructuring

let myArray =[1, 2 ,4 ,5, 8, 6 , 9]

const [first , second] = myArray

console.log(`First Element : ${first}
Second Element : ${second}`);

// Task 4 : object distructuring

myObj = {
    english : 45,
    chemistry : 30,
    physics : 25
}

function printMarks({english, chemistry, physics}) {
    console.log(`I've got ${english} in English,
I've got ${chemistry} is Chemistry,
I've got ${physics} in Physics.`);
}
printMarks(myObj)
