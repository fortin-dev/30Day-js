// Task 3 :

function checkExecutionFlow(){
    try {
        console.log('Try');
        throw new Error('Error')
        }
     catch (error) {
        console.log('Error :',error.message);
    }
    finally{
        console.log('Check Complete');
    }
}

checkExecutionFlow();