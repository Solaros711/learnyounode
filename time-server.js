const net = require('net')
let args = process.argv.splice(2)
console.log(args)
const server = net.createServer(function (socket){
    t = new Date()
    day = t.getDate()
    month = t.getMonth()+1
    if(month < 10){
        month = '0'+String(month)
    }
    if(day < 10){
        day = '0'+String(day)
    }
    data = `${t.getFullYear()}-${month}-${day} ${t.getHours()}:${t.getMinutes()}\n`
    socket.write(data)
    console.log(data)
    socket.end()
})
server.listen(args[0])