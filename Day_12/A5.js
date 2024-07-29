// Task 8 :

fetch('https://xyz.com/data')
.then((user)=>{
    return user.json()
})
.then((data)=>{
    console.log(data);
})
.catch(error => console.log(error.message))

// Task  9 :

async function myfuc(){
    try {
        let respose = await fetch('xyz.com')    
    }
     catch (error) {
        console.log(error.message);
    }
}

myfuc();