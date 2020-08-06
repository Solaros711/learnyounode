const http = require('http')
const bl = require('bl')
const { time } = require('console')
args = process.argv.splice(2)

if(args){
    const server = http.createServer(function(request, response){
        let t = new URL(`http://localhost/${args[0]}` + request.url)
        console.log(t.search)
        let f = t.search.slice(5)
        let data = new Date(f)
        console.log(data)
        request.pipe(bl(function(err){
            if(err){
                console.log(err)
                response.write(err)
                return err
            }else{
                if(t.pathname.includes('/api/parsetime')){
                    response.write(`{\"hour\":${data.getHours()},\"minute\":${data.getMinutes()},\"second\":${data.getSeconds()}}`)
                    response.end()
                }else{
                    response.write(`{\"unixtime\":${data.getTime()}}`)
                    response.end()
                }
            }
        }))
        
    })
    server.listen(args[0])
}