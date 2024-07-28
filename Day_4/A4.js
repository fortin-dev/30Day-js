// *
// **
// ***
// ****
// ***** print this pattern using nested loops


let pattern ="";
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        pattern+="* ";
    }
    console.log(pattern);
    pattern="";
}