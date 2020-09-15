// promise 1    --------------------------------------------------
let ditepati = true;
let janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
      setTimeout(()=>{
        resolve("Ketemu di Bandung");
      }, 2000);  
    } else{
        reject ("janji tidak ditepati")
    }
});

janji1
    .then((result) => { 
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


    const janji2 = (tmp) =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const tempat=['Bali', 'Lombok', 'Jakarta', 'Yogyakarta']
                let cek = tempat.find((item)=>{
                    return item === tmp
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Not Found'))
            }
        }, 1000)
    })
    }
    
    janji2('Bali')
    .then((result)=>{
        console.log('Nama tempat:',result)
    })
    .catch((error)=>{
        console.log(error.message)
    })

// //fetch data
// const fetch = require('node-fetch'); //untuk mebaca hasil fetching data di terminal

// function fetchData(){
//      fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//     return response.json()})
//     .then(data => {
//         // console.log(data);
//         data.map(user =>{
//             console.log(user.name);
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// fetchData();