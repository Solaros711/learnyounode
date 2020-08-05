const fs = require('fs')
let args = process.argv

callback = (err, list) => {
    if(err){
        return err
    }else{
        let val = '.' + args[3]
        let dirs = []
        for(let i = 0; i < list.length; i++){
            if(list[i].toString().includes(val)){
                dirs.push(list[i].toString())
            }
        }
        
        dirs.map(d => console.log(d))
    }
}

if(args.length > 2){
    data = fs.readdir(args[2], callback)
}