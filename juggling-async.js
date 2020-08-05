const bl = require('bl')
const http = require('http')

let args = process.argv.splice(2)

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

doHTTPTrick = (links) => {
    let toSend = new Array(links.length)
    let count = 0
    for(let i = 0; i < links.length; i++){
        http.get(links[i], (response) => {
            response.setEncoding('utf8')
            response.pipe(bl(function(err, data){
                if(err){
                    console.log(err)
                    return
                }else{
                    toSend[i] = data.toString()
                    count++
                    if(count === links.length){
                        for(let i = 0; i < toSend.length; i++){
                            console.log(toSend[i])
                        }
                    }
                }
            }))
        })
    }
}

if(args.length > 0){
    doHTTPTrick(args)
}