// Task 1:

const prms = new Promise((resolve, reject) => {
    setTimeout(() => {
        let condition =false;
        if(condition){
            resolve('Done')
        }
        else{
            reject('Failed')
        }
    }, 2000);
});

async function printError(){
    try {
        let respose = await prms;
        console.log('respose is :',respose);    
    } catch (error) {
        console.log("error "+error+ " occured");
    }
}

printError();


// Task 2 :

try {
    let a = 5, b=0;

    if(b===0|| isNaN(b)){
        throw 'invalide'
    }
    else{
        console.log(a/b);
    }
} catch (error) {
    console.log(error);
}



function printN (){
    let numer = 10, deNum = 0;
    if(deNum === 0){
        throw 'Numerator is Zero'
    }
    else
    return numer/deNum;
}

try {
    let tryFunc = printN();
    console.log(tryFunc);
} catch (err) {
    console.log("Error :"+err);
}


function divide(nume, deNume){
    if(deNume === 0){
        throw new Error('Demoninator is Zero')
    }
    return nume/deNume;
}

function checkDevide(nume, deNume){
    try{
        let result = divide(nume, deNume)
        return result;
    }
    catch(error){
        return error.message;
        
    }

}


console.log(checkDevide(5,1));
console.log(checkDevide(5,0));