const map = require('through2-map')
const http = require('http')
args = process.argv.splice(2)
console.log(args)

if(args){
    const server = http.createServer(function (request, response){
        request.pipe(map(function(chunk){
            return chunk.toString().toUpperCase()
        })).pipe(response)
    })
    server.listen(args[0])
}