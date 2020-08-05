const mymodule = require('./mymodule.js')
let args = process.argv

callback = (err, args) => {
    if(err != null){
        console.log(err)
    }else{
        for(let i = 0; i < args.length; i++){
            console.log(args[i])
        }
        return args
    }
}

if(args.length > 2){
    mymodule(args[2], args[3], callback)
}

//