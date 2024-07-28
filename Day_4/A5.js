//print no. from 1-10 but skip 5 using continue

for(let num=1; num<=10; num++){
    if(num == 5)
        continue;
    
    else
    console.log(num);
}
//print no. from 1-10 but stop the loop when 7 is encountered using break

for(let num=1; num<=10; num++){
    if(num == 7)
        break;
    
    else
    console.log(num);
}