/*
Method (Built-in Functions) Javascript
 1. reverse()
    yaitu membalik urutan elemen
    contoh
    let fruits = ["Banana", "Orange", "Apple", "Mango"]; 
    function myFunction() {
    return fruits.reverse();
    }
    console.log(myFunction())

 2. splice()
    Menambah dan / atau menghapus elemen
    contoh
    function myFunction() {
    return fruits.splice(2, 0, "Lemon", "Kiwi");
    }
    console.log(myFunction())

//  3. slice()
    // Mengekstrak bagian dari larik dan mengembalikan larik baru
    // contoh 
    let fruits = ["Banana", "Orange", "Apple", "Mango"]; 
    
    function myFunction() {
    return fruits.slice(3);
    }
    console.log(myFunction())

    4. toString()
        Mengembalikan representasi string dari nilai angka.
        contoh
        num = new Number(15)
        console.log(num.toString())

    5. valueOf()
        Mengembalikan nilai angka
        contoh
        var num = new Number(15.11234);
        console.log(num.valueOf())
    6. charAt()
        Mengembalikan karakter pada indeks yang ditentukan
        cntoh
        var str = new String( "This is string" );
        console.log(str.charAt(0))
    7. concat()
        Menggabungkan teks dari dua string dan mengembalikan string baru.
        contoh
        var str1 = new String( "This is string one" );
         var str2 = new String( "This is string two" );
         var str3 = str1.concat( str2 ); 
         console.log(str3)
    8. toLocaleLowerCase()
        Karakter dalam string diubah menjadi huruf kecil dengan tetap memperhatikan lokal saat ini.
        contoh
        var str = "Apples are round, and Apples are Juicy.";
        console.log(str.toLocaleLowerCase( ))

    9. toLocaleUpperCase()
        Karakter dalam string diubah menjadi huruf besar dengan tetap menghormati lokal saat ini
        contoh
        var str = "Apples are round, and Apples are Juicy.";
        console.log(str.toLocaleUpperCase( ))

    10. pop()
        Menghapus elemen terakhir dari array dan mengembalikan elemen itu.
        contoh
        var numbers = [1, 4, 9];
        var element = numbers.pop();
        console.log(element)
        */


//program searching nama yang dapat dibatasi jumlah outputnya 
const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

 
//    function filterName(query){
//        return name.filter(function(huruf){
//            return huruf.toLowerCase().indexOf(query.toLowerCase()) >= 0
//        });
//    }

//    console.log(filterName('an'));

   let newName = []
   function searchName(parameterFinding, maximalArray, callback){
       let regEx = new RegExp(parameterFinding,'i')
       
       for (let i = 0; i < name.length; i++) {
           if (regEx.test(name[i]) === true) {//jika string "an" ada/ bernilai true
               newName.push(name[i])
           }
           
       }
       callback(newName.splice(0, maximalArray))
   }
   function callback(sentence){
       console.log(sentence)
   }

   searchName("an",3, callback)