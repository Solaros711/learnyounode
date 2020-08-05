const bl = require('bl')
const http = require('http')

let args = process.argv

callback = (response) => {
    response.setEncoding('utf8')
    response.pipe(bl(function(err, data){
        if(err){
            console.log(err)
            return
        }else{
            let strs = data.toString()
            console.log(strs.length)
            console.log(strs)
        }
    }))
}

doHTTPTrick = (link) => {
    response = http.get(link, callback)
}

if(args.length > 2){
    doHTTPTrick(args[2])
}