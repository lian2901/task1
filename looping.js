// Sebuah angka 1234567 Buatlah output :

// 1000000
// 200000
// 30000
// 4000
// 500
// 60
// 7 

let angka = 1234567
let angkaStr = angka.toString()
let banyak = angkaStr.length
for (let i = 1; i <= angkaStr.length; i++){
    banyak--
    console.log(angkaStr.charAt(i-1)+'0'.repeat(banyak));
}

