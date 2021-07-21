const fs  = require('fs')
/*
fs.writeFile('./hey.txt', 'MY BITCHES ', ()=> {
    console.log('file was written')
})

fs.writeFile('./hey1.txt', 'MY PIDORS ', ()=> {
    console.log('file was written')
})
console.log("we are here")
*/

if(!fs.existsSync('./assets') ){
fs.mkdir('./assets', (err)=>  {
    if(err){
        console.log(err)
    }
    console.log('folder created')
}) 

}

else {
    fs.rmdir('./assets', (err) => {
        console.log(err)
    } )
    console.log('file deleted')
}