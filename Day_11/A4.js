// fetch('https://api.github.com/')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

const pApi = fetch('https://api.github.com/');

async function responseApi(){
    try {
        let value = await pApi
        console.log(value);
    } catch (error) {
        console.log(error);
    }
} 

responseApi();