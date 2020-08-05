const fs = require('fs')
let args = process.argv

if(args.length > 2){
    let file = fs.readFileSync(args[2])
    let str = file.toString()
    let data = str.split('\n')
    let num = data.length - 1
    console.log(num)
}