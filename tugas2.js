
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if ((nilaiAwal < nilaiAkhir) === false){
        console.log("Nilai Akhir harus lebih besar dari nilai awal")
    }
    if ((dataArray.length <=5) === true) {
        console.log("Jumlah angka dalam array harus lebih dari 5")
        
    }
    for (let i = 0; i < dataArray.length; i++) {
        if ((dataArray[i] > nilaiAwal) &&
        (dataArray[i] < nilaiAkhir)) {
            console.log(dataArray[i])
        }
    }
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// seleksiNilai(4, 17 , [2, 25, 4])