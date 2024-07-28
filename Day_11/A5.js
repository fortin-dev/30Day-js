// Task 8 ;
// const prms1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let condtion = false
//         if(condtion){
//             console.log(('order 1 :'));
//             resolve();
//         }
//         else{
//             reject('failed')
//         }
//     }, 1000);
// })
// const prms2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let condtion = false;
//         if(condtion){
//             console.log(('order 2 :'));
//             resolve();
//         }
//         else{
//             reject('failed')
//         }
//     }, 2000);
// })
// const prms3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let condtion = true;
//         if(condtion){
//             console.log(('order 3 :'));
//             resolve();
//         }
//         else{
//             reject('failed')
//         }
//     }, 3000);
// })

// Promise.all([prms1, prms2, prms3]).then((ordr)=>{
//     console.log('All order : ',ordr);
// })
// .catch((err)=>{
//     console.error('One of the order failed', err);
// });

// Task 9 ;


const racePrms1 = new Promise((resolve, reject) => {
    setTimeout( resolve, 500, 'Order 1');
})

const racePrms2 = new Promise((resolve, reject) => {
    setTimeout( resolve, 1000, 'Order 2');
})

const racePrms3 = new Promise((resolve, reject) => {
    setTimeout( resolve, 3000, 'Order 3');
})


Promise.race([racePrms1, racePrms2, racePrms3])
.then((first)=>{
    console.log("First to arrive : ",first);
})
.catch((error)=>{
    console.error(error)
})

