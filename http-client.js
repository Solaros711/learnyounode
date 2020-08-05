const http = require('http')
let args = process.argv

callback = (response) => {
    let strs = []
    response.setEncoding('utf8')
    response.on('data', function(data){
        strs = data
        console.log(strs)
    })
    
}

doHTTPTrick = (link) => {
    response = http.get(link, callback)
}

if(args.length > 2){
    doHTTPTrick(args[2])
}