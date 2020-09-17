//arrowfunction palindrom
const teksPalindrom = (teks) =>{
    let hasil = ""
    if (typeof teks === "string"){
            // console.log(teks)
            for (let i = teks.length -1;  i >= 0; i--) {
                hasil += teks[i].toLowerCase();
                // console.log(hasil)
            }
            if(hasil == teks.toLowerCase()){
                console.log("Palindrom");
            }else{
                console.log("Bukan palindrom");
            }
    }else{
        console.log("teks yang dimasukkan harus berupa string")
    }
}

teksPalindrom("MalaM")


// //reverseword
// let reverseWord = (kalimat) => {
//     let hasil="";
//     let tulisan = kalimat.length;
//     if (typeof kalimat === "string") {
//         for (let i = tulisan - 1; i >= -1; i--) { //cek dari huruf paling belakang
//             if (kalimat[i] == ' ' || i < 0) {
//                 for (j = i; (j+1) <= tulisan; j++){//cetak dari huruf terdepan
//                     hasil = hasil + kalimat[j]
//                     // console.log(hasil)
//                 }
//                 tulisan = tulisan - (tulisan - i)//mengurangi kalimat dengan jumlah kata yg sudah dicetak
//             }// console.log(hasil)
//         }console.log(hasil)
//     }else{
//     console.log("Data yang dimasukkan harus string")
//     }
// }

// reverseWord("Saya Belajar Javascript")




