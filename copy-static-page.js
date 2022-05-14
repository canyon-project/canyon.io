const fs = require('fs')
fs.copyFile('./api-reference.html','./build/api-reference.html',function(err){
    if(err) console.log('something wrong was happened')
    else console.log('copy file succeed');
})
