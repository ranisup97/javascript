//algoritma
/*
1. membuat fungsi divideAndSort yang menerima parameter angka
2. membuat variabel newAngka untuk merubah angka menjadi string
3. membuat variabel StringArray untuk menampung array
4. membuat variabel temporary untuk menyimpan hasil sorting
5. membuat variabel newStrigArray untuk menyimpan variabel array baru
6. melakukan perulangan sampai i kurang dari panjang newAngka
7. melakukan kondisi jika karakter dalam newAngka ada nol maka 
    push kedalam penampung baru yaitu atringArray
8. kemudian stringArray dengan index j menampung karakter newAngka ke index i
9. membuat sub array baru dari stringArray dengan nmethod array.from 
    dan ditampung dalam newstringArray
10. array dalam newStringAray di sorting  dan ditampung di variabel temp
11. cetak yang ada dalam temp dan melakukan method join
12. panggil fungsi devideandsort
*/

const divideAndSort = (angka) =>{
    let newAngka = angka.toString();//convert to string
    let stringArray = [''];
    let j = 0;//inisialisasi
    let temp = []; //temp untuk hasil sort
    let newStringArray = [];//variabel array baru

    for(let i = 0; i < newAngka.length; i++){
        if(newAngka.charAt(i) == 0){//mengecek apabila ada 0
            j++;
            stringArray.push('');//push ke string array
        }else{
            stringArray[j] += newAngka.charAt(i); //
            // console.log(stringArray) output [ '595656', '159466', '56' ]
            newStringArray[j] = Array.from(stringArray[j]);
            // console.log(newStringArray)  output [ '5', '5', '5', '6', '6', '9' ],[ '1', '4', '5', '6', '6', '9' ],[ '5', '6' ]
            temp[j] = newStringArray[j].sort((a, b) => {
                return a - b;
            });
            
        } 
    }
    console.log(temp.join(' '));
    // let ubah = temp.join(' ');
    // console.log(ubah)
}
divideAndSort(5956560159466056);