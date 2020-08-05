const fs = require('fs')
let args = process.argv

callback = (err, file) => {
    if(err){
        return err
    }else{
        let str = file.toString()
        let data = str.split("\n")
        console.log(data.length-1)
    }
       
}

if(args.length > 2){
    data = fs.readFile(args[2], callback)
}