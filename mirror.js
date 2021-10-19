// Buatlah script untuk menggabungkan inputan menjadi output seperti berikut. dan untuk huruf pertama dan terakhir menjadi kapital

// Input: ---ccv
// Output: ---CcvvcC---

// Input: avg
// Output: AvggvA


let str = "---ccv"
let pos = 0
for (let i = 0; i < str.length; i++){
    let huruf = str.charAt(i)
    if (huruf.toLowerCase() != huruf.toUpperCase()){
        var char = huruf
        pos = i
        break;
    }
}
let newStr = str.replace(str[pos],char.toUpperCase())
let newStrReverse = newStr.split("").reverse().join("");
let strMirror = newStr + newStrReverse;
console.log(strMirror);



