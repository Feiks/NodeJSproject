const fs = require('fs')

const readStream = fs.createReadStream('./hey.txt')
readStream.on('data', (chunk)=> {
    
    console.log('-------NEW CHUNK---------')
    console.log(chunk.toString())
})