// Task 12 : create a multidimensional array

let twoDimArray = [];
let row = 5;
let column = 5;

let insertNum = 0;

for(let i=0; i<row ; i++){
    twoDimArray[i] = []
    for(let j=0 ; j<column; j++){
        twoDimArray[i][j] = insertNum++;
    }
}

console.log(twoDimArray);

// Task 13 : access and print a specific number form 2D-Array

let specNumber = 7;

for(let i=0; i<row ; i++){
    
    for(let j=0 ; j<column; j++){
       
        if(twoDimArray[i][j] == specNumber){
            console.log(`${specNumber} is found `)
            break;
        }
    }
}