const fs = require('fs')
const bl = require('bl')
const http = require('http')
args = process.argv.splice(2)

if(args){
    const server = http.createServer(function (request, response){
        var stream = fs.createReadStream(args[1])
        stream.pipe(response)

        // stream.pipe(bl(function(err, data){
        //     if(err){
        //         console.log(err)
        //         response.write(err)
        //         response.end()
        //         return err
        //     }else{
        //         toSend = data.toString()
        //         console.log(toSend)
        //         response.write(toSend)
        //         response.end()
        //         return toSend
        //     }
        // }))
    })
    server.listen(args[0])
}