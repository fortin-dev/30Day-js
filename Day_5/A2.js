//Task 3 : find maximum no. among two no.

function max(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is Maximum among ${num1} ${num2} `);
    }
    else
    console.log(`${num2} is Maximum among ${num1} & ${num2} `);
}

max(13, 15)

//Task 4 : concatinate two string

function concatinate(str1, str2){
    let conc = str1.concat(str2)
    console.log(conc);
}
concatinate("Well", "come")