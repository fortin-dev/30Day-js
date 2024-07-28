const prms = new Promise((resolve, reject)=>{
    let condision = true;
    setTimeout(() => {
        if(condision){
            resolve({name : 'fortin', age : 19 , id : '12345'})
        }
        else{
            reject('an error occured')
        }
    }, 2000);
});

prms.then(function(user){
     console.log('first then : ',user);
     return user.name
})
.then((nv)=>{
    console.log('user name is :',nv);
})
.catch((str)=>{
    console.log(str);
})
.finally(()=>{
    console.log("Task completed");
})