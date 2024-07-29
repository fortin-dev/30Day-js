// // Task 6 :

// const prms = new Promise((resolve, reject) => {
//     let random = Math.floor(Math.random()*10)
//      if(random!=0){
//         console.log("Random Generation is not Zero");
//         resolve()
//      }
//      else reject('Random Number is Zero')
// })

// prms.then( message => console.log(message))
// .catch(err => console.log(err))

// Task 7 :

const Prms2 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random()*10)
    if(random!=0){
        resolve('No. is non Zero')
    }
    else
    reject('No. is Zero');
});

async function tryPrms2(){   
    try {
        let result = await Prms2;
        console.log(result);    
    } catch (error) {
        console.log(error);
    }
} 

tryPrms2();