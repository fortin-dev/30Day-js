const prms = new Promise(function(resolve, reject){
    setTimeout(() => {
        let cond = false;
        if(cond){
        console.log('Timout was set at 3sec');
        resolve();
        }
        else{
            reject("An error acurred");
        }
    }, 1000);
});

async function consumePrms(){
    try {
        const res= await prms
        console.log(res);
    } 
    catch (error) {
        console.log(error);
    }
}

consumePrms();