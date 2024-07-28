
// Task 4 :

class newError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name;
    }
}


function throwErr(){
   return false;
}

try {
    let result = throwErr();
    if(result === false){
        throw new newError('This is custom error')
    }
} catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}


// Task 5 : 

class invalideUser extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        this.message = 'Invalid User Input';
    }
};


function checkUser(user){
   try {
    if(user.name===''){
        // throw new invalideUser('UserName is empty');
        throw new invalideUser();
    }
   } catch (error) {
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
   }
};

const newUser = {
    name : '',
    age : 21,
    id : 12345
};

checkUser(newUser);