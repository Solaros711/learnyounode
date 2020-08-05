const fs = require('fs')

filter = (path, arg, callback) => {
    search = (err, list) => {
        if(err){
            callback(err)
            return
        }else{
            let send = list.filter(d => (d.includes('.' + arg)))
            callback(err, send)
            return
        }
    }
    fs.readdir(path, search)
}

module.exports = filter