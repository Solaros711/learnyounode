let array = process.argv
let val = 0
if(array.length > 2){
    for(let i = 2; i < array.length; i++){
        val += Number(array[i])
    }
}
console.log(val)