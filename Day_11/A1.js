// Task 1 :
const prms = new Promise(function( resolve, reject ){
    setTimeout(function(){
        console.log("resolve complete");
        resolve();
    } ,5000)
})

// Task 2 :
const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let err = true;
        if(!err){
            resolve({name : 'fortin', id : '12345'});
        }
        else{
            reject('AN ERROR OCCURED')
        }
    }, 2000);
});

promiseTwo.then(function(user){
    console.log(user);
})
.catch((str)=>{
    console.log(str);
})