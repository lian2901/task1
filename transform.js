
// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []

function transformasi(arr){
    let result = []
    let pos = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0){
            pos++
        }else{
            if (typeof result[pos] == "undefined"){
                result[pos] = 1;
            }else{
                result[pos] +=1
            }
        }
    }
    return result  
}

console.log(transformasi([0, 0, 0, 0, 0]))