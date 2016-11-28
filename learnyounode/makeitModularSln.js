var module = require('./mymodule')

// console.log(process.argv)
var filePath = process.argv[2];
var fileExt = process.argv[3];

function callBkFn(err, data){
    if(err){console.log(err)}

        data.forEach(file => {
        console.log(file);
    })
}

module(filePath, fileExt, callBkFn);
